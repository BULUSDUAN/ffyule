﻿// Decompiled with JetBrains decompiler
// Type: Lottery.DAL.Youle11x5Check
// Assembly: Lottery.DAL, Version=1.0.1.1, Culture=neutral, PublicKeyToken=null
// MVID: 7C79BA5B-21B3-40F1-B96A-84E656E22E29
// Assembly location: F:\pros\tianheng\bf\WebAppOld\bin\Lottery.DAL.dll

using Lottery.DAL.Flex;
using Lottery.Entity;
using Lottery.Utils;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;

namespace Lottery.DAL
{
  public static class Youle11x5Check
  {
    private static List<KeyValue> list = new List<KeyValue>();

    public static void RunOfIssueNum(int LotteryId, string IssueNum)
    {
      Youle11x5Check.DoWord doWord = new Youle11x5Check.DoWord(Youle11x5Check.Run);
      doWord.BeginInvoke(LotteryId, IssueNum, new AsyncCallback(Youle11x5Check.CallBack), (object) doWord);
    }

    public static void CallBack(IAsyncResult r)
    {
      Youle11x5Check.DoWord asyncState = (Youle11x5Check.DoWord) r.AsyncState;
    }

    private static void Run(int LotteryId, string IssueNum)
    {
      try
      {
        Youle11x5Check.list.Clear();
        DataTable dataTable = LotteryDAL.GetDataTable(LotteryId.ToString(), IssueNum);
        if (dataTable.Rows.Count > 0)
        {
          DataTable lotteryCheck = LotteryDAL.GetLotteryCheck(LotteryId);
          if (LotteryDAL.GetCurRealGet(LotteryId) < Convert.ToDecimal(lotteryCheck.Rows[0]["CheckPer"]))
          {
            int int32_1 = Convert.ToInt32(lotteryCheck.Rows[0]["CheckNum"]);
            int num1 = 0;
            string code11X5;
            do
            {
              Decimal num2 = new Decimal(0);
              Decimal num3 = new Decimal(0);
              Decimal num4 = new Decimal(0);
              code11X5 = NumberCode.CreateCode11X5(5);
              for (int index = 0; index < dataTable.Rows.Count; ++index)
              {
                DataRow row = dataTable.Rows[index];
                int int32_2 = Convert.ToInt32(row["Id"]);
                int int32_3 = Convert.ToInt32(row["UserId"]);
                string sType = row["PlayCode"].ToString();
                string CheckNumber = BetDetailDAL.GetBetDetail2(Convert.ToDateTime(row["STime2"]).ToString("yyyyMMdd"), int32_3.ToString(), int32_2.ToString());
                if (string.IsNullOrEmpty(CheckNumber))
                  CheckNumber = "";
                string Pos = row["Pos"].ToString();
                Decimal num5 = Convert.ToDecimal(row["SingleMoney"]);
                Decimal num6 = Convert.ToDecimal(row["Bonus"]);
                Decimal num7 = Convert.ToDecimal(row["PointMoney"]);
                Decimal num8 = Convert.ToDecimal(row["Times"]);
                Decimal num9 = Convert.ToDecimal(row["Total"]);
                num3 += num9 * num8;
                int num10 = CheckPlay.Check(code11X5, CheckNumber, Pos, sType);
                num4 += num6 * num8 * num5 * (Decimal) num10 / new Decimal(2) + num7;
              }
              Decimal num11 = num3 - num4;
              if (num11 > new Decimal(0))
                num1 = int32_1;
              Youle11x5Check.list.Add(new KeyValue()
              {
                tKey = code11X5,
                tValue = num11
              });
              ++num1;
            }
            while (num1 < int32_1);
            List<KeyValue> list = Youle11x5Check.list.OrderByDescending<KeyValue, Decimal>((Func<KeyValue, Decimal>) (a => a.tValue)).ToList<KeyValue>();
            if (new LotteryDataDAL().Exists(LotteryId, IssueNum))
              return;
            new LotteryDataDAL().AddYoule(LotteryId, IssueNum, list[0].tKey, DateTime.Now.ToString(), code11X5);
            LotteryCheck.RunYouleOfIssueNum(LotteryId, IssueNum, list[0].tKey);
            Youle11x5Check.SetOpenListJson(LotteryId);
          }
          else
          {
            string code11X5 = NumberCode.CreateCode11X5(5);
            if (new LotteryDataDAL().Exists(LotteryId, IssueNum))
              return;
            new LotteryDataDAL().AddYoule(LotteryId, IssueNum, code11X5, DateTime.Now.ToString(), code11X5);
            LotteryCheck.RunYouleOfIssueNum(LotteryId, IssueNum, code11X5);
            Youle11x5Check.SetOpenListJson(LotteryId);
          }
        }
        else
        {
          string code11X5 = NumberCode.CreateCode11X5(5);
          if (new LotteryDataDAL().Exists(LotteryId, IssueNum))
            return;
          new LotteryDataDAL().AddYoule(LotteryId, IssueNum, code11X5, DateTime.Now.ToString(), code11X5);
          LotteryCheck.RunYouleOfIssueNum(LotteryId, IssueNum, code11X5);
          Youle11x5Check.SetOpenListJson(LotteryId);
        }
      }
      catch (Exception ex)
      {
        new LogExceptionDAL().Save("派奖异常", ex.Message);
      }
    }

    public static void SetOpenListJson(int lotteryId)
    {
      string _xml = "";
      string _jsonstr = "";
      new LotteryDataDAL().GetListJSON(lotteryId, ref _jsonstr, ref _xml);
      string str1 = ConfigurationManager.AppSettings["DataUrl"].ToString();
      string str2 = str1 + "OpenList" + (object) lotteryId + ".xml";
      DirFile.CreateFolder(DirFile.GetFolderPath(false, str2));
      StreamWriter streamWriter1 = new StreamWriter(str2, false, Encoding.UTF8);
      streamWriter1.Write(_jsonstr);
      streamWriter1.Close();
      string str3 = str1 + "lottery" + (object) lotteryId + ".xml";
      DirFile.CreateFolder(DirFile.GetFolderPath(false, str3));
      StreamWriter streamWriter2 = new StreamWriter(str3, false, Encoding.UTF8);
      streamWriter2.Write(_xml);
      streamWriter2.Close();
    }

    public delegate void DoWord(int LotteryId, string IssueNum);
  }
}
