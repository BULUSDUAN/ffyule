﻿// Decompiled with JetBrains decompiler
// Type: Lottery.Utils.Check11X5_2Start
// Assembly: Lottery.Utils, Version=1.0.1.1, Culture=neutral, PublicKeyToken=null
// MVID: E7A9C185-AF0A-4444-AE46-9A73782D0A74
// Assembly location: F:\pros\tianheng\bf\WebAppOld\bin\Lottery.Utils.dll

using System.Text.RegularExpressions;

namespace Lottery.Utils
{
  public static class Check11X5_2Start
  {
    public static int P_2ZXFS(string LotteryNumber, string CheckNumber)
    {
      int num = 0;
      string[] strArray1 = LotteryNumber.Split(',');
      LotteryNumber = strArray1[0] + "," + strArray1[1];
      string[] strArray2 = LotteryNumber.Split(',');
      string[] strArray3 = CheckNumber.Split(',');
      Regex regex = new Regex("^[_0-9]+$");
      if (regex.IsMatch(strArray3[0]) && regex.IsMatch(strArray3[1]))
      {
        if (strArray3.Length >= 2 && strArray3[0].IndexOf(strArray2[0]) != -1 && strArray3[1].IndexOf(strArray2[1]) != -1)
          ++num;
      }
      else
        num = 0;
      return num;
    }

    public static int P_2ZXDS(string LotteryNumber, string CheckNumber)
    {
      int num = 0;
      string[] strArray1 = LotteryNumber.Split(',');
      LotteryNumber = strArray1[0] + strArray1[1];
      string[] strArray2 = CheckNumber.Replace(" ", "").Split(',');
      for (int index = 0; index < strArray2.Length; ++index)
      {
        if (!new Regex("^[_0-9]+$").IsMatch(strArray2[index]))
          return 0;
        if (LotteryNumber == strArray2[index])
          ++num;
      }
      return num;
    }

    public static int P_2ZXFS_Z(string LotteryNumber, string CheckNumber)
    {
      int num = 0;
      string[] strArray1 = LotteryNumber.Split(',');
      LotteryNumber = strArray1[0] + "," + strArray1[1];
      string[] strArray2 = CheckNumber.Split('_');
      for (int index1 = 0; index1 < strArray2.Length; ++index1)
      {
        for (int index2 = 0; index2 < strArray2.Length; ++index2)
        {
          if (index1 != index2)
          {
            CheckNumber = strArray2[index1] + strArray2[index2];
            LotteryNumber = LotteryNumber.Replace(",", "");
            if (CheckNumber.Equals(LotteryNumber))
              ++num;
          }
        }
      }
      return num;
    }

    public static int P_2ZXDS_Z(string LotteryNumber, string CheckNumber)
    {
      int num = 0;
      string[] strArray1 = LotteryNumber.Split(',');
      LotteryNumber = strArray1[0] + "," + strArray1[1];
      string[] strArray2 = LotteryNumber.Split(',');
      for (int index1 = 0; index1 < strArray2.Length; ++index1)
      {
        for (int index2 = 0; index2 < strArray2.Length; ++index2)
        {
          if (index1 != index2)
          {
            LotteryNumber = strArray2[index1] + strArray2[index2];
            string str1 = CheckNumber.Replace(" ", "");
            char[] chArray = new char[1]{ ',' };
            foreach (string str2 in str1.Split(chArray))
            {
              if (LotteryNumber == str2)
                ++num;
            }
          }
        }
      }
      return num;
    }
  }
}
