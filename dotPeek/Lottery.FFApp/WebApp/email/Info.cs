﻿// Decompiled with JetBrains decompiler
// Type: Lottery.WebApp.email.Info
// Assembly: Lottery.FFApp, Version=1.0.1.1, Culture=neutral, PublicKeyToken=null
// MVID: CD5F1C7F-2EB9-4806-9452-C9F3634A8986
// Assembly location: F:\pros\tianheng\bf\WebAppOld\bin\Lottery.FFApp.dll

using Lottery.DAL;
using System;
using System.Data;

namespace Lottery.WebApp.email
{
  public class Info : UserCenterSession
  {
    public string L_Id;
    public string L_Time;
    public string L_SendName;
    public string L_ReceiveName;
    public string L_Title;
    public string L_Contents;

    protected void Page_Load(object sender, EventArgs e)
    {
      this.Admin_Load("", "html");
      if (this.Page.IsPostBack)
        return;
      string _id = this.L_Id = this.Str2Str(this.q("id"));
      string str = "select dbo.f_GetUserName(SendId) as SendName,dbo.f_GetUserName(ReceiveId) as ReceiveName,* from N_UserEmail where Id=" + _id;
      this.doh.Reset();
      this.doh.SqlCmd = str;
      DataTable dataTable = this.doh.GetDataTable();
      new UserEmailDAL().UpdateState(_id);
      if (dataTable.Rows.Count > 0)
      {
        DataRow row = dataTable.Rows[0];
        this.L_Time = row["STime"].ToString();
        this.L_SendName = row["SendName"].ToString();
        this.L_ReceiveName = row["ReceiveName"].ToString();
        this.L_Title = row["Title"].ToString();
        this.L_Contents = row["Contents"].ToString();
      }
      else
      {
        this.Response.Write("参数错误");
        this.Response.End();
      }
      dataTable.Clear();
      dataTable.Dispose();
    }
  }
}
