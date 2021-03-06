﻿using System;
using System.Data;
using System.Text;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using Lottery.DAL;

namespace Lottery.Admin
{
	public class lotteryNoPlay : AdminCenter
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			base.Admin_Load("master", "");
			string text = base.Str2Str(base.q("id"));
			this.hfLotteryId.Value = text;
			if (!base.IsPostBack)
			{
				this.BindInfo(text);
			}
		}

		public void BindInfo(string lotId)
		{
			this.doh.Reset();
			this.doh.ConditionExpress = " LotteryId=" + lotId;
			string text = this.doh.GetField("Sys_LotteryPlaySetting", "Setting").ToString();
			StringBuilder stringBuilder = new StringBuilder();
			stringBuilder.Append("<table cellspacing=\"0\" cellpadding=\"0\" class=\"formtable\">");
			this.doh.Reset();
			this.doh.SqlCmd = "SELECT [Id],case [TypeId] when 1 then '时时彩' when 2 then '11选5'  when 3 then '低频彩'  when 4 then 'PK10' end LotName,[Title] FROM Sys_PlayBigType where TypeId=" + lotId.ToString().Substring(0, 1) + " ORDER BY id";
			DataTable dataTable = this.doh.GetDataTable();
			string str = string.Empty;
			string str2 = string.Empty;
			for (int i = 0; i < dataTable.Rows.Count; i++)
			{
				str = dataTable.Rows[i]["Id"].ToString();
				str2 = dataTable.Rows[i]["Title"].ToString();
				stringBuilder.Append("<tr><th>" + str2 + "</th>");
				stringBuilder.Append("<td>");
				this.doh.Reset();
				this.doh.SqlCmd = "SELECT [Id],lotteryId,Radio,[Title0],[Title]  FROM [Sys_PlaySmallType]  where lotteryId<5 and type is not null and Radio=" + str + " ORDER BY id";
				DataTable dataTable2 = this.doh.GetDataTable();
				for (int j = 0; j < dataTable2.Rows.Count; j++)
				{
					string str3 = dataTable2.Rows[j]["Id"].ToString();
					string str4 = dataTable2.Rows[j]["Title"].ToString();
					stringBuilder.Append("<input type=checkbox class='checkbox' name=\"admin_power\" value=\"" + str3 + "\"");
					if (text.Contains("," + str3 + ","))
					{
						stringBuilder.Append(" checked");
					}
					stringBuilder.Append("> <span style='margin-right:10px;'>" + str4 + "</span>");
				}
				stringBuilder.Append("</td></tr>");
			}
			stringBuilder.Append("</table>");
			this.ltAdminSetting.Text = stringBuilder.ToString();
		}

		protected void btnSave_Click(object sender, EventArgs e)
		{
			string fieldValue = ",";
			if (base.Request.Form["admin_power"] != null)
			{
				fieldValue = "," + base.Request.Form["admin_power"].ToString() + ",";
			}
			string text = this.hfLotteryId.Value.ToString();
			this.doh.Reset();
			this.doh.ConditionExpress = "LotteryId=" + text;
			if (this.doh.Count("Sys_LotteryPlaySetting") > 0)
			{
				this.doh.Reset();
				this.doh.ConditionExpress = "LotteryId=" + text;
				this.doh.AddFieldItem("Setting", fieldValue);
				this.doh.Update("Sys_LotteryPlaySetting");
			}
			else
			{
				this.doh.Reset();
				this.doh.AddFieldItem("LotteryId", text);
				this.doh.AddFieldItem("Setting", fieldValue);
				this.doh.AddFieldItem("IsUsed", 0);
				this.doh.Insert("Sys_LotteryPlaySetting");
			}
			new LogAdminOperDAL().SaveLog(this.AdminId, "0", "游戏管理", "添加了彩种玩法限制");
			base.FinalMessage("正确保存!", "close.htm", 0);
		}

		protected HtmlForm form1;

		protected Button btnSave;

		protected HiddenField hfLotteryId;

		protected Literal ltAdminSetting;
	}
}
