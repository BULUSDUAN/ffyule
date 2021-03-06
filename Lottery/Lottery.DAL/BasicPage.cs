﻿using System;
using System.Data.SqlClient;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using Lottery.DBUtility;
using Lottery.DBUtility.UI;
using Lottery.Entity;
using Lottery.Utils;

namespace Lottery.DAL
{
	public class BasicPage : PageUI
	{
		protected override void OnInit(EventArgs e)
		{
			base.Server.ScriptTimeout = 90;
			this.LoadLottery();
			base.OnInit(e);
		}

		public void LoadLottery()
		{
			this.ConnectDb();
			if (HttpContext.Current.Application["Lottery"] == null)
			{
				this.SetupSystemDate();
			}
			this.site = (SiteModel)HttpContext.Current.Application["Lottery"];
		}

		public string ORDER_BY_RND()
		{
			return "newid()";
		}

		public override void ConnectDb()
		{
			if (this.doh == null)
			{
				try
				{
					string connectionString = Const.ConnectionString;
					SqlConnection conn = new SqlConnection(connectionString);
					this.doh = new SqlDbOperHandler(conn);
				}
				catch (Exception ex)
				{
					throw ex;
				}
			}
		}

		public void CloseDB()
		{
			if (this.doh != null)
			{
				this.doh.Dispose();
			}
		}

		public void CheckClientIP()
		{
		}

		public string GetRandomNumberString(int int_NumberLength)
		{
			return this.GetRandomNumberString(int_NumberLength, false);
		}

		public string GetRandomNumberString(int int_NumberLength, bool onlyNumber)
		{
			Random random = new Random();
			return this.GetRandomNumberString(int_NumberLength, onlyNumber, random);
		}

		public string GetRandomNumberString(int int_NumberLength, bool onlyNumber, Random random)
		{
			string text = "123456789";
			if (!onlyNumber)
			{
				text += "abcdefghjkmnpqrstuvwxyz";
			}
			char[] array = text.ToCharArray();
			string text2 = string.Empty;
			for (int i = 0; i < int_NumberLength; i++)
			{
				text2 += array[random.Next(0, array.Length)].ToString();
			}
			return text2;
		}

		public string GetProductOrderNum()
		{
			return DateTime.Now.ToString("yyyyMMddHHmmss") + this.GetRandomNumberString(5, true);
		}

		public string ThisUser()
		{
			if (Cookie.GetValue(this.site.CookiePrev + "WebApp") != null)
			{
				return Cookie.GetValue(this.site.CookiePrev + "WebApp", "name");
			}
			return "";
		}

		public bool CheckFormUrl(bool checkHost)
		{
			if (this.q("debugkey") == this.site.DebugKey)
			{
				return true;
			}
			if (HttpContext.Current.Request.UrlReferrer == null)
			{
				this.SaveVisitLog(2, 0);
				return false;
			}
			if (checkHost && HttpContext.Current.Request.UrlReferrer.Host != HttpContext.Current.Request.Url.Host)
			{
				this.SaveVisitLog(2, 0);
				return false;
			}
			return true;
		}

		public bool CheckFormUrl()
		{
			return this.CheckFormUrl(true);
		}

		protected void FinalMessage(string pageMsg, string go2Url, int BackStep)
		{
			this.FinalMessage(pageMsg, go2Url, BackStep, 2);
		}

		protected void FinalMessage(string pageMsg, string go2Url, int BackStep, int Seconds)
		{
			StringBuilder stringBuilder = new StringBuilder();
			stringBuilder.Append("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>\r\n");
			stringBuilder.Append("<html xmlns='http://www.w3.org/1999/xhtml'>\r\n");
			stringBuilder.Append("<head>\r\n");
			stringBuilder.Append("<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\r\n");
			stringBuilder.Append("<link rel='stylesheet' type='text/css' href='/statics/css/common.css'/>");
			stringBuilder.Append("<title>系统提示</title>\r\n");
			stringBuilder.Append("<style>\r\n");
			stringBuilder.Append("body {padding:0; margin:0; background:#f5f5f5;}\r\n");
			stringBuilder.Append("#info{padding:0; margin:0;position: absolute;width:500px;height:220px;margin-top:-110px;margin-left:-250px; left:50%;top:50%;}\r\n");
			stringBuilder.Append("</style>\r\n");
			stringBuilder.Append("<script language=\"javascript\">\r\n");
			stringBuilder.Append("var seconds=" + Seconds + ";\r\n");
			stringBuilder.Append("for(i=1;i<=seconds;i++)\r\n");
			stringBuilder.Append("{window.setTimeout(\"update(\" + i + \")\", i * 1000);}\r\n");
			stringBuilder.Append("function update(num)\r\n");
			stringBuilder.Append("{\r\n");
			stringBuilder.Append("if(num == seconds)\r\n");
			if (BackStep > 0)
			{
				stringBuilder.Append("{ history.go(" + -BackStep + "); }\r\n");
			}
			else if (go2Url != "")
			{
				stringBuilder.Append("{ self.location.href='" + go2Url + "'; }\r\n");
			}
			else
			{
				stringBuilder.Append("{window.close();}\r\n");
			}
			stringBuilder.Append("else\r\n");
			stringBuilder.Append("{ }\r\n");
			stringBuilder.Append("}\r\n");
			stringBuilder.Append("</script>\r\n");
			stringBuilder.Append("<base target='_self' />\r\n");
			stringBuilder.Append("</head>\r\n");
			stringBuilder.Append("<body>\r\n");
			stringBuilder.Append("<div id='info'>\r\n");
			stringBuilder.Append("<div class='tto-popup' style='width:500px;font-size:14px;'>");
			stringBuilder.Append("<div class='popup-header'>");
			stringBuilder.Append("<h3 class='popup-title'>温馨提示</h3>");
			stringBuilder.Append("<span class='popup-close'><i class='icon-close'></i></span>");
			stringBuilder.Append("</div>");
			stringBuilder.Append("<div class='popup-body'>");
			stringBuilder.Append("<div class='operate-result'>");
			stringBuilder.Append("<div class='operate-message'>");
			stringBuilder.Append("<i class='icon-msg icon-warn'></i>");
			stringBuilder.Append("<h4>" + pageMsg + "</h4>");
			stringBuilder.Append("<p>如果您的浏览器没有自动跳转，请点击立即跳转！</p>");
			stringBuilder.Append("</div>");
			stringBuilder.Append("<div class='btn-group'>");
			if (BackStep > 0)
			{
				stringBuilder.Append("<a href=\"javascript:history.go(" + -BackStep + ")\"><button type='button' class='btn btn-primary'>立即跳转</button></a>\r\n");
			}
			else
			{
				stringBuilder.Append("<a href=\"" + go2Url + "\"><button type='button' class='btn btn-primary'>立即跳转</button></a>");
			}
			stringBuilder.Append("</div>");
			stringBuilder.Append("</div>");
			stringBuilder.Append("</div>");
			stringBuilder.Append("</div>");
			stringBuilder.Append("</div>");
			stringBuilder.Append("</body>\r\n");
			stringBuilder.Append("</html>\r\n");
			HttpContext.Current.Response.Write(stringBuilder.ToString());
			HttpContext.Current.Response.End();
		}

		public int Int_ThisPage()
		{
			return (this.Str2Int(this.q("page"), 0) < 1) ? 1 : this.Str2Int(this.q("page"), 0);
		}

		public bool ExecuteSqlInFile(string pathToScriptFile)
		{
			return ExecuteSqlBlock.Go("1", HttpContext.Current.Application["Lottery_dbConnStr"].ToString(), pathToScriptFile);
		}

		public static string JoinFields(string _fields)
		{
			if (_fields.Trim().Length == 0)
			{
				return "";
			}
			return "," + _fields;
		}

		public void SavePageLog(int _second)
		{
			this.SaveVisitLog(1, _second);
		}

		public void SaveVisitLog(int _type, int _second)
		{
			this.SaveVisitLog(_type, _second, "");
		}

		public void SaveVisitLog(int _type, int _second, string _logfilename)
		{
			if (_type == 1)
			{
				string path = (_logfilename == "") ? ("~/statics/log/vister_" + DateTime.Now.ToString("yyyyMMdd") + ".log") : _logfilename;
				float num = (float)DateTime.Now.Subtract(HttpContext.Current.Timestamp).TotalSeconds;
				if (num > (float)_second)
				{
					StreamWriter streamWriter = new StreamWriter(HttpContext.Current.Server.MapPath(path), true, Encoding.UTF8);
					streamWriter.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
					streamWriter.WriteLine("\tIP 地 址：" + Const.GetUserIp);
					streamWriter.WriteLine("\t访 问 者：" + this.ThisUser());
					streamWriter.WriteLine("\t浏 览 器：" + HttpContext.Current.Request.Browser.Browser + " " + HttpContext.Current.Request.Browser.Version);
					streamWriter.WriteLine("\t耗    时：" + ((float)DateTime.Now.Subtract(HttpContext.Current.Timestamp).TotalSeconds).ToString("0.000") + "秒");
					streamWriter.WriteLine("\t地    址：" + this.ServerUrl() + Const.GetCurrentUrl);
					streamWriter.WriteLine("---------------------------------------------------------------------------------------------------");
					streamWriter.Close();
					streamWriter.Dispose();
					return;
				}
			}
			else
			{
				string path2 = (_logfilename == "") ? ("~/statics/log/hacker_" + DateTime.Now.ToString("yyyyMMdd") + ".log") : _logfilename;
				StreamWriter streamWriter2 = new StreamWriter(HttpContext.Current.Server.MapPath(path2), true, Encoding.UTF8);
				streamWriter2.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
				streamWriter2.WriteLine("\tIP 地 址：" + Const.GetUserIp);
				streamWriter2.WriteLine("\t访 问 者：" + this.ThisUser());
				streamWriter2.WriteLine("\t浏 览 器：" + HttpContext.Current.Request.Browser.Browser + " " + HttpContext.Current.Request.Browser.Version);
				streamWriter2.WriteLine("\t来    源：" + Const.GetRefererUrl);
				streamWriter2.WriteLine("\t地    址：" + this.ServerUrl() + Const.GetCurrentUrl);
				streamWriter2.WriteLine("---------------------------------------------------------------------------------------------------");
				streamWriter2.Close();
				streamWriter2.Dispose();
			}
		}

		protected string ServerUrl()
		{
			if (HttpContext.Current.Request.ServerVariables["Server_Port"].ToString() == "80")
			{
				return "http://" + HttpContext.Current.Request.Url.Host;
			}
			return "http://" + HttpContext.Current.Request.Url.Host + ":" + HttpContext.Current.Request.ServerVariables["Server_Port"].ToString();
		}

		public string RandomStr(int Num)
		{
			string text = string.Empty;
			Random random = new Random();
			for (int i = 0; i < Num; i++)
			{
				int num = random.Next();
				text += ((char)(48 + (ushort)(num % 10))).ToString();
			}
			return text;
		}

		protected void SetupSystemDate()
		{
			this.site = new SiteDAL().GetEntity();
			HttpContext.Current.Application.Lock();
			HttpContext.Current.Application["Lottery"] = this.site;
			HttpContext.Current.Application.UnLock();
		}

		protected void WriteJs(string sType, string jsContent)
		{
			if (sType == "-1")
			{
				this.Page.ClientScript.RegisterStartupScript(base.GetType(), "writejs", jsContent, true);
				return;
			}
			this.Page.ClientScript.RegisterClientScriptBlock(base.GetType(), "writejs", jsContent, true);
		}

		protected string JsonResult(int success, string str)
		{
			return string.Concat(new string[]
			{
				"{\"result\":\"",
				success.ToString(),
				"\",\"returnval\":\"",
				str,
				"\"}"
			});
		}

		protected string p__HighLight(string PageStr, string keys)
		{
			string[] array = keys.Split(new string[]
			{
				" "
			}, StringSplitOptions.None);
			for (int i = 0; i < array.Length; i++)
			{
				PageStr = PageStr.Replace(array[i].Trim(), "<font color=#C60A00>" + array[i].Trim() + "</font>");
			}
			return PageStr;
		}

		protected string HighLightKeyWord(string pain, string keys)
		{
			string text = pain + "%%%%%%";
			if (keys.Length < 1)
			{
				return text;
			}
			string[] array = keys.Split(new string[]
			{
				" "
			}, StringSplitOptions.None);
			if (array.Length < 1)
			{
				return text;
			}
			for (int i = 0; i < array.Length; i++)
			{
				MatchCollection matchCollection = Regex.Matches(text, array[i].Trim(), RegexOptions.IgnoreCase);
				for (int j = 0; j < matchCollection.Count; j++)
				{
					text = text.Insert(matchCollection[j].Index + array[i].Trim().Length + j * 9, "</em>");
					text = text.Insert(matchCollection[j].Index + j * 9, "<em>");
				}
			}
			return Strings.Left(text, text.Length - 6);
		}

		public string getListName(string sName, string sCode)
		{
			int num = sCode.Length / 4 - 1;
			string str = "";
			if (num > 0)
			{
				for (int i = 0; i < num; i++)
				{
					str += "├－";
				}
			}
			return str + sName;
		}

		public string PageList(int mode, int totalCount, int PSize, int currentPage, string[] FieldName, string[] FieldValue)
		{
			string str = HttpContext.Current.Request.ServerVariables["Script_Name"].ToString();
			string text = "";
			for (int i = 0; i < FieldName.Length; i++)
			{
				string text2 = text;
				text = string.Concat(new string[]
				{
					text2,
					FieldName[i].ToString(),
					"=",
					FieldValue[i].ToString(),
					"&"
				});
			}
			string httpN = str + "?" + text + "page=<#page#>";
			return PageBar.GetPageBar(mode, "html", 0, totalCount, PSize, currentPage, httpN);
		}

		public string AutoPageBar(int mode, int stepNum, int totalCount, int PSize, int currentPage)
		{
			string httpN = this.GetUrlPrefix() + "<#page#>";
			return PageBar.GetPageBar(mode, "html", stepNum, totalCount, PSize, currentPage, httpN);
		}

		public string GetUrlPrefix()
		{
			HttpRequest arg_0A_0 = HttpContext.Current.Request;
			string str = HttpContext.Current.Request.ServerVariables["Url"];
			if (HttpContext.Current.Request.QueryString.Count == 0)
			{
				return str + "?page=";
			}
			if (HttpContext.Current.Request.ServerVariables["Query_String"].StartsWith("page=", StringComparison.OrdinalIgnoreCase))
			{
				return str + "?page=";
			}
			string[] array = HttpContext.Current.Request.ServerVariables["Query_String"].Split(new string[]
			{
				"page="
			}, StringSplitOptions.None);
			if (array.Length == 1)
			{
				return str + "?" + array[0] + "&page=";
			}
			return str + "?" + array[0] + "page=";
		}

		public string getPageBar(int mode, string stype, int stepNum, int totalCount, int PSize, int currentPage, string HttpN)
		{
			return PageBar.GetPageBar(mode, stype, stepNum, totalCount, PSize, currentPage, HttpN);
		}

		public string getPageBar(int mode, string stype, int stepNum, int totalCount, int PSize, int currentPage, string Http1, string HttpM, string HttpN, int limitPage)
		{
			return PageBar.GetPageBar(mode, stype, stepNum, totalCount, PSize, currentPage, Http1, HttpM, HttpN, limitPage);
		}

		public string q(string s)
		{
			if (HttpContext.Current.Request.QueryString[s] != null && HttpContext.Current.Request.QueryString[s] != "")
			{
				return Strings.SafetyQueryS(HttpContext.Current.Request.QueryString[s].ToString());
			}
			return string.Empty;
		}

		public string f(string s)
		{
			if (HttpContext.Current.Request.Form[s] != null && HttpContext.Current.Request.Form[s] != "")
			{
				return HttpContext.Current.Request.Form[s].ToString();
			}
			return string.Empty;
		}

		public int Str2Int(string s, int t)
		{
			return Validator.StrToInt(s, t);
		}

		public int Str2Int(string s)
		{
			return this.Str2Int(s, 0);
		}

		public string Str2Str(string s)
		{
			return Validator.StrToInt(s, 0).ToString();
		}

		protected int GetStringLen(string str)
		{
			byte[] bytes = Encoding.UTF8.GetBytes(str);
			return bytes.Length;
		}

		protected string GetCutString(string str, int Length)
		{
			Length *= 2;
			byte[] bytes = Encoding.Default.GetBytes(str);
			if (bytes.Length <= Length)
			{
				return str;
			}
			return Encoding.Default.GetString(bytes, 0, Length);
		}

		protected void SaveJsFile(string TxtStr, string TxtFile)
		{
			this.SaveJsFile(TxtStr, TxtFile, "2");
		}

		protected void SaveJsFile(string TxtStr, string TxtFile, string Edcode)
		{
			Encoding encoding = Encoding.Default;
			if (Edcode != null)
			{
				if (!(Edcode == "3"))
				{
					if (!(Edcode == "2"))
					{
						if (Edcode == "1")
						{
							encoding = Encoding.GetEncoding("GB2312");
						}
					}
					else
					{
						encoding = Encoding.UTF8;
					}
				}
				else
				{
					encoding = Encoding.Unicode;
				}
			}
			DirFile.CreateFolder(DirFile.GetFolderPath(false, TxtFile));
			StreamWriter streamWriter = new StreamWriter(TxtFile, false, encoding);
			streamWriter.Write(TxtStr);
			streamWriter.Close();
		}

		protected void SaveCssFile(string TxtStr, string TxtFile)
		{
			this.SaveCssFile(TxtStr, TxtFile, "2");
		}

		protected void SaveCssFile(string TxtStr, string TxtFile, string Edcode)
		{
			Encoding encoding = Encoding.Default;
			if (Edcode != null)
			{
				if (!(Edcode == "3"))
				{
					if (!(Edcode == "2"))
					{
						if (Edcode == "1")
						{
							encoding = Encoding.GetEncoding("GB2312");
						}
					}
					else
					{
						encoding = Encoding.UTF8;
					}
				}
				else
				{
					encoding = Encoding.Unicode;
				}
			}
			DirFile.CreateFolder(DirFile.GetFolderPath(false, TxtFile));
			StreamWriter streamWriter = new StreamWriter(TxtFile, false, encoding);
			streamWriter.Write(TxtStr);
			streamWriter.Close();
		}

		protected void SaveCacheFile(string CacheStr, string OutFile)
		{
			this.SaveCacheFile(CacheStr, OutFile, "2");
		}

		protected void SaveCacheFile(string CacheStr, string OutFile, string Edcode)
		{
			Encoding encoding = Encoding.Default;
			if (Edcode != null)
			{
				if (!(Edcode == "3"))
				{
					if (!(Edcode == "2"))
					{
						if (Edcode == "1")
						{
							encoding = Encoding.GetEncoding("GB2312");
						}
					}
					else
					{
						encoding = Encoding.UTF8;
					}
				}
				else
				{
					encoding = Encoding.Unicode;
				}
			}
			DirFile.CreateFolder(DirFile.GetFolderPath(false, OutFile));
			try
			{
				StreamWriter streamWriter = new StreamWriter(OutFile, false, encoding);
				streamWriter.Write(CacheStr);
				streamWriter.Close();
			}
			catch (Exception ex)
			{
				throw ex;
			}
		}

		public bool SendMobileMessage(string _ReceiveMobiles, string _Content)
		{
			smsHelp.SendSMS(_ReceiveMobiles, _Content + "[" + this.site.Name + "]");
			return true;
		}

		protected SiteModel site = new SiteModel();
	}
}
