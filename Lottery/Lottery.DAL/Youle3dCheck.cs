﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using Lottery.DAL.Flex;
using Lottery.Entity;
using Lottery.Utils;

namespace Lottery.DAL
{
	public static class Youle3dCheck
	{
		public static void RunOfIssueNum(int LotteryId, string IssueNum)
		{
			Youle3dCheck.DoWord doWord = new Youle3dCheck.DoWord(Youle3dCheck.Run);
			doWord.BeginInvoke(LotteryId, IssueNum, new AsyncCallback(Youle3dCheck.CallBack), doWord);
		}

		public static void CallBack(IAsyncResult r)
		{
			Youle3dCheck.DoWord arg_0B_0 = (Youle3dCheck.DoWord)r.AsyncState;
		}

		private static void Run(int LotteryId, string IssueNum)
		{
			try
			{
				Youle3dCheck.list.Clear();
				DataTable dataTable = LotteryDAL.GetDataTable(LotteryId.ToString(), IssueNum);
				if (dataTable.Rows.Count > 0)
				{
					DataTable lotteryCheck = LotteryDAL.GetLotteryCheck(LotteryId);
					decimal curRealGet = LotteryDAL.GetCurRealGet(LotteryId);
					if (curRealGet < Convert.ToDecimal(lotteryCheck.Rows[0]["CheckPer"]))
					{
						int num = Convert.ToInt32(lotteryCheck.Rows[0]["CheckNum"]);
						string[] array = new string[20];
						int num2 = 0;
						do
						{
							decimal d = 0m;
							decimal num3 = 0m;
							array = NumberCode.CreateCode20();
							int num4 = (Convert.ToInt32(array[0]) + Convert.ToInt32(array[1]) + Convert.ToInt32(array[2]) + Convert.ToInt32(array[3]) + Convert.ToInt32(array[4]) + Convert.ToInt32(array[5]) + Convert.ToInt32(array[6])) % 10;
							int num5 = (Convert.ToInt32(array[7]) + Convert.ToInt32(array[8]) + Convert.ToInt32(array[9]) + Convert.ToInt32(array[10]) + Convert.ToInt32(array[11]) + Convert.ToInt32(array[12]) + Convert.ToInt32(array[13])) % 10;
							int num6 = (Convert.ToInt32(array[14]) + Convert.ToInt32(array[15]) + Convert.ToInt32(array[16]) + Convert.ToInt32(array[17]) + Convert.ToInt32(array[18]) + Convert.ToInt32(array[19])) % 10;
							string text = string.Concat(new object[]
							{
								num4,
								",",
								num5,
								",",
								num6
							});
							for (int i = 0; i < dataTable.Rows.Count; i++)
							{
								DataRow dataRow = dataTable.Rows[i];
								int num7 = Convert.ToInt32(dataRow["Id"]);
								int num8 = Convert.ToInt32(dataRow["UserId"]);
								string sType = dataRow["PlayCode"].ToString();
								string text2 = BetDetailDAL.GetBetDetail2(Convert.ToDateTime(dataRow["STime2"]).ToString("yyyyMMdd"), num8.ToString(), num7.ToString());
								if (string.IsNullOrEmpty(text2))
								{
									text2 = "";
								}
								string pos = dataRow["Pos"].ToString();
								decimal d2 = Convert.ToDecimal(dataRow["SingleMoney"]);
								decimal d3 = Convert.ToDecimal(dataRow["Bonus"]);
								decimal d4 = Convert.ToDecimal(dataRow["PointMoney"]);
								decimal d5 = Convert.ToDecimal(dataRow["Times"]);
								decimal d6 = Convert.ToDecimal(dataRow["Total"]);
								d += d6 * d5;
								int value = CheckPlay.Check(text, text2, pos, sType);
								num3 += d3 * d5 * d2 * value / 2m + d4;
							}
							decimal num9 = d - num3;
							if (num9 > 0m)
							{
								num2 = num;
							}
							KeyValue keyValue = new KeyValue();
							keyValue.tKey = text;
							keyValue.tValue = num9;
							Youle3dCheck.list.Add(keyValue);
							num2++;
						}
						while (num2 < num);
						IOrderedEnumerable<KeyValue> source = from a in Youle3dCheck.list
						orderby a.tValue descending
						select a;
						List<KeyValue> list = source.ToList<KeyValue>();
						if (!new LotteryDataDAL().Exists(LotteryId, IssueNum))
						{
							new LotteryDataDAL().AddYoule(LotteryId, IssueNum, list[0].tKey, DateTime.Now.ToString(), string.Join(",", array));
							LotteryCheck.RunYouleOfIssueNum(LotteryId, IssueNum, list[0].tKey);
							Youle3dCheck.SetOpenListJson(LotteryId);
						}
					}
					else
					{
						string[] array2 = NumberCode.CreateCode20();
						int num10 = (Convert.ToInt32(array2[0]) + Convert.ToInt32(array2[1]) + Convert.ToInt32(array2[2]) + Convert.ToInt32(array2[3]) + Convert.ToInt32(array2[4]) + Convert.ToInt32(array2[5]) + Convert.ToInt32(array2[6])) % 10;
						int num11 = (Convert.ToInt32(array2[7]) + Convert.ToInt32(array2[8]) + Convert.ToInt32(array2[9]) + Convert.ToInt32(array2[10]) + Convert.ToInt32(array2[11]) + Convert.ToInt32(array2[12]) + Convert.ToInt32(array2[13])) % 10;
						int num12 = (Convert.ToInt32(array2[14]) + Convert.ToInt32(array2[15]) + Convert.ToInt32(array2[16]) + Convert.ToInt32(array2[17]) + Convert.ToInt32(array2[18]) + Convert.ToInt32(array2[19])) % 10;
						string number = string.Concat(new object[]
						{
							num10,
							",",
							num11,
							",",
							num12
						});
						if (!new LotteryDataDAL().Exists(LotteryId, IssueNum))
						{
							new LotteryDataDAL().AddYoule(LotteryId, IssueNum, number, DateTime.Now.ToString(), string.Join(",", array2));
							LotteryCheck.RunYouleOfIssueNum(LotteryId, IssueNum, number);
							Youle3dCheck.SetOpenListJson(LotteryId);
						}
					}
				}
				else
				{
					string[] array3 = NumberCode.CreateCode20();
					int num13 = (Convert.ToInt32(array3[0]) + Convert.ToInt32(array3[1]) + Convert.ToInt32(array3[2]) + Convert.ToInt32(array3[3]) + Convert.ToInt32(array3[4]) + Convert.ToInt32(array3[5]) + Convert.ToInt32(array3[6])) % 10;
					int num14 = (Convert.ToInt32(array3[7]) + Convert.ToInt32(array3[8]) + Convert.ToInt32(array3[9]) + Convert.ToInt32(array3[10]) + Convert.ToInt32(array3[11]) + Convert.ToInt32(array3[12]) + Convert.ToInt32(array3[13])) % 10;
					int num15 = (Convert.ToInt32(array3[14]) + Convert.ToInt32(array3[15]) + Convert.ToInt32(array3[16]) + Convert.ToInt32(array3[17]) + Convert.ToInt32(array3[18]) + Convert.ToInt32(array3[19])) % 10;
					string number2 = string.Concat(new object[]
					{
						num13,
						",",
						num14,
						",",
						num15
					});
					if (!new LotteryDataDAL().Exists(LotteryId, IssueNum))
					{
						new LotteryDataDAL().AddYoule(LotteryId, IssueNum, number2, DateTime.Now.ToString(), string.Join(",", array3));
						LotteryCheck.RunYouleOfIssueNum(LotteryId, IssueNum, number2);
						Youle3dCheck.SetOpenListJson(LotteryId);
					}
				}
			}
			catch (Exception ex)
			{
				new LogExceptionDAL().Save("派奖异常", ex.Message);
			}
		}

		public static void SetOpenListJson(int lotteryId)
		{
			string value = "";
			string value2 = "";
			new LotteryDataDAL().GetListJSON(lotteryId, ref value2, ref value);
			string text = ConfigurationManager.AppSettings["DataUrl"].ToString();
			string text2 = string.Concat(new object[]
			{
				text,
				"OpenList",
				lotteryId,
				".xml"
			});
			DirFile.CreateFolder(DirFile.GetFolderPath(false, text2));
			StreamWriter streamWriter = new StreamWriter(text2, false, Encoding.UTF8);
			streamWriter.Write(value2);
			streamWriter.Close();
			string text3 = string.Concat(new object[]
			{
				text,
				"lottery",
				lotteryId,
				".xml"
			});
			DirFile.CreateFolder(DirFile.GetFolderPath(false, text3));
			StreamWriter streamWriter2 = new StreamWriter(text3, false, Encoding.UTF8);
			streamWriter2.Write(value);
			streamWriter2.Close();
		}

		private static List<KeyValue> list = new List<KeyValue>();

		public delegate void DoWord(int LotteryId, string IssueNum);
	}
}
