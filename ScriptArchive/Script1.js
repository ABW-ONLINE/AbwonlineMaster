// JavaScript source code
            </inbox><redirect>

                      [</ftps://["<user namespace=""></user>"<:>{'<username></username>'}]<.abwonline.ca>"<.inbox>"'<inbox></inbox>'>]
                    <:></ftps.inbox.abwonline.ca></redirect>
</connect>);
        }
    }
}
 

    {<table><namespace[<?1>?/ '   '"  "]#|N/%<arg>!>"
  ],
  "PreviewInSolutionExplorer": false
}
static void Main(string[] args)
{
    // The code provided will print ‘Hello World’ to the console.
    // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
    Console.WriteLine("Hello World!");
    Console.ReadKey();

    // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
}
}
}
<? xml version="1.0" encoding="utf-8"?>
<html>
  <head>
    <title>Grid mode</title>
    <meta name = "viewport" content= "width=device-width, initial-scale=1.0" >
      < link href= "https://fonts.googleapis.com/css?family=Roboto:400,500" rel= "stylesheet" >

        < script type= "text/javascript" src= "../../codebase/vault.js?v=3.0.0" ></ script >
        < link rel= "stylesheet" type= "text/css" href= "../../codebase/vault.css?v=3.0.0" >

          < script type= "text/javascript" src= "../common/js/index.js?v=3.0.0" ></ script >
          < link rel= "stylesheet" type= "text/css" href= "../common/dhx_samples.css?v=3.0.0" >


            < !--metrics-- >
            < script >
              (function(i, s, o, g, r, a, m){
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function(){
        (i[r].q = i[r].q ||[]).push(arguments)},i[r].l = 1 * new Date(); a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
              })bool function(object i, object s, object o, object g, object r, object a, object m)
{
    throw new NotImplementedException();
}

(window, document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-11031269-1', 'auto');
ga('send', 'pageview');
            </script>
            <!-- error tracking -->
            <script src = "https://cdn.ravenjs.com/3.19.1/raven.min.js" crossorigin="anonymous"></script>
            <script>Raven.config('https://a2578da6be394598bfe003e4dbb3a394@sentry.dhtmlx.ru/13').install()</script>
          </head>
  <body>
    <div id = "test" class="container"></div>
    <script>
      var vault = new dhx.Vault('test', {
      mode: "grid",
      uploader: {
      target: "/vault/backend/upload"
      }
      });
      vault.data.parse(filesData);

    </script>
  </body>
</html>
******************************************************************************************************************************************************************
<? xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion = "15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Import Project = "$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
  <PropertyGroup>
    <Configuration Condition = " '$(Configuration)' == '' " > Debug </ Configuration >
    < Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
    <ProjectGuid>{A382D358-4D91-4DA7-A540-EBE717AD2753}</ProjectGuid>
    <OutputType>Exe</OutputType>
    <RootNamespace>ConsoleApp2</RootNamespace>
    <AssemblyName>ConsoleApp2</AssemblyName>
    <TargetFrameworkVersion>v4.6.1</TargetFrameworkVersion>
    <FileAlignment>512</FileAlignment>
    <AutoGenerateBindingRedirects>true</AutoGenerateBindingRedirects>
    <Deterministic>true</Deterministic>
  </PropertyGroup>
  <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' " >
    < PlatformTarget > AnyCPU </ PlatformTarget >
    < DebugSymbols > true </ DebugSymbols >
    < DebugType > full </ DebugType >
    < Optimize > false </ Optimize >
    < OutputPath > bin\Debug\</OutputPath>
    <DefineConstants>DEBUG;TRACE</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
  </PropertyGroup>
  <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Release|AnyCPU' " >
    < PlatformTarget > AnyCPU </ PlatformTarget >
    < DebugType > pdbonly </ DebugType >
    < Optimize > true </ Optimize >
    < OutputPath > bin\Release\</OutputPath>
    <DefineConstants>TRACE</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
  </PropertyGroup>
  <ItemGroup>
    <Reference Include = "System" />
    < Reference Include="System.Core" />
    <Reference Include = "System.Xml.Linq" />
    < Reference Include="System.Data.DataSetExtensions" />
    <Reference Include = "Microsoft.CSharp" />
    < Reference Include="System.Data" />
    <Reference Include = "System.Net.Http" />
    < Reference Include="System.Xml" />
  </ItemGroup>
  <ItemGroup>
    <Compile Include = "F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\gem b ox e-mail.cs"OPEN=""/>
    <Compile Include = "F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\AssemblyInfo.cs"OPEN="">
      <Link>Properties\AssemblyInfo.cs</Link>
    </Compile>
  </ItemGroup>
  <ItemGroup>
    <None Include = "App.config" />
  </ ItemGroup >
  < Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" />
</Project><? xml version="1.0" encoding="UTF-8"?>
<rows>
  <head>
    <afterInit>
      <call command = "setColumnHidden" >
        < param > 1 </ param >
        < param > true </ param >
      </ call >
    </ afterInit >
    < column width="70" type="dyn" align="right"  sort="str">Sales</column>
    <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
      <column width = "*" type= "ed" align= "left"  sort= "str" > Author </ column >
  
      < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
  
      < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
      <column width = "80" type= "co" align= "left" sort= "str" >
        Shipping
        < option value= "1" > 1 </ option >
  
        < option value= "2" > 2 </ option >
  
        < option value= "3" > 3 </ option >
  
        < option value= "4" > 10 </ option >
  
        < option value= "5" > 20 </ option >
  
        < option value= "6" > 30 </ option >
  
      </ column >
  
      < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
  
      < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
    <settings>
      <colwidth>px</colwidth>
      </settings>
  </head>
  <row id = "1" >
  
      < cell > -1500 </ cell >
  
      < cell > A Time to Kill</cell>
      <cell>John Grisham</cell>
    <cell>12.99</cell>
    <cell>1</cell>
    <cell>24</cell>
    <cell>0</cell>
    <cell>05/01/1998</cell>
  </row>
  <row id = "2" >
  
      < cell > 1000 </ cell >
  
      < cell > Blood and Smoke</cell>
    <cell>Stephen King</cell>
    <cell>0</cell>
    <cell>1</cell>
    <cell>24</cell>
    <cell>0</cell>
    <cell>01/01/2000</cell>
  </row>
  <row id = "3" >
  
      < cell > -200 </ cell >
  
      < cell > The Rainmaker</cell>
      <cell>John Grisham</cell>
    <cell>7.99</cell>
    <cell>0</cell>
    <cell>48</cell>
    <cell>0</cell>
    <cell>12/01/2001</cell>
  </row>
</rows>
<!DOCTYPE html>
<!--pro-->
<html>
  <head>
    <title>Run commands from XML</title>
    <meta http-equiv= "Content-Type" content= "text/html; charset=UTF-8" />
  
      < meta http-equiv= "X-UA-Compatible" content= "IE=edge" />
  
      < link rel= "stylesheet" type= "text/css" href= "../../../codebase/fonts/font_roboto/roboto.css" />
  
      < link rel= "stylesheet" type= "text/css" href= "../../../codebase/dhtmlx.css" />
  
      < script src= "../../../codebase/dhtmlx.js" ></ script >
  
      < script >
        function loadGridFromString(){
    myGrid = new dhtmlXGridObject('gridbox');
    myGrid.setDelimiter("|");
    //myGrid.setStyle("text-align:center", "", "", "");
    myGrid.setImagePath("../../../codebase/imgs/");
    myGrid.parse(document.getElementById("gridcont1").value);
}
function loadGridFromString2()
{
    myGrid2 = new dhtmlXGridObject('gridbox2');
    myGrid2.setImagePath("../../../codebase/imgs/");
    myGrid2.parse(document.getElementById("gridcont2").value);
}
    </script>
  </head>
  <body>
    <h1>Run grid methods from XML</h1>
    <p>You are allowed to use methods before grid intialization:</p>
    <div>
      <li>
        Example:  <a href = "javascript:void(0)" onClick="loadGridFromString()">Load grid with web skin</a> set from XML by calling setSkin method before grid initialization
        </li>
    </div>
    <br>
      <div id = "gridbox" style="width:650px; height:165px; background-color:white;"></div>
      The same as with script:<br/>
      <textarea id = "gridcont1" style="width:650px;height:150px;"><? xml version="1.0" encoding="UTF-8"?>
        <rows>
          <head>
            <beforeInit>
              <call command = "setSkin" >
                < param > material </ param >
              </ call >
              < call command="setStyle">
                <param>text-align:center;</param>
              </call>
            </beforeInit>
            <column width = "70" type="dyn" align="right"  sort="str">Sales</column>
            <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
              <column width = "100" type= "ed" align= "left"  sort= "str" > Author </ column >
  
              < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
  
              < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
              <column width = "80" type= "co" align= "left" sort= "str" >
                Shipping
                < option value= "1" > 1 </ option >
  
                < option value= "2" > 2 </ option >
  
                < option value= "3" > 3 </ option >
  
                < option value= "4" > 10 </ option >
  
                < option value= "5" > 20 </ option >
  
                < option value= "6" > 30 </ option >
  
              </ column >
  
              < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
  
              < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
            <settings>
              <colwidth>px</colwidth>
              </settings>
          </head>
          <row id = "1" >
  
              < cell > -1500 </ cell >
  
              < cell > A Time to Kill</cell>
              <cell>John Grisham</cell>
            <cell>12.99</cell>
            <cell>1</cell>
            <cell>24</cell>
            <cell>0</cell>
            <cell>05/01/1998</cell>
          </row>
          <row id = "2" >
  
              < cell > 1000 </ cell >
  
              < cell > Blood and Smoke</cell>
            <cell>Stephen King</cell>
            <cell>0</cell>
            <cell>1</cell>
            <cell>24</cell>
            <cell>0</cell>
            <cell>01/01/2000</cell>
          </row>
          <row id = "3" >
  
              < cell > -200 </ cell >
  
              < cell > The Rainmaker</cell>
              <cell>John Grisham</cell>
            <cell>7.99</cell>
            <cell>0</cell>
            <cell>48</cell>
            <cell>0</cell>
            <cell>12/01/2001</cell>
          </row>
        </rows>
      </textarea>
      <p>Also, you can run methods after grid intialization</p>
        <div>
        <li>

            Example:  <a href = "javascript:void(0)" onClick= "loadGridFromString2()" > Load grid and set the 2nd column hidden</a> by calling setColumnHidden method from xml after grid initialization
        </li>
      </div><br>
        <div id = "gridbox2" style= "width:650px;height:150px;background-color:white;" ></ div >
          The same as with script:<br/>
        <textarea id = "gridcont2" style= "width:650px;height:150px;" ><? xml version = "1.0" encoding= "UTF-8" ?>
  
            < rows >
  
              < head >
  
                < afterInit >
  
                  < call command = "setColumnHidden" >
  
                    < param > 1 </ param >
  
                    < param > true </ param >
  
                  </ call >
  
                </ afterInit >
  
                < column width= "70" type= "dyn" align= "right"  sort= "str" > Sales </ column >
  
                < column width= "150" type= "ed" align= "left"  sort= "str" > Book Title</column>
                <column width = "*" type= "ed" align= "left"  sort= "str" > Author </ column >
  
                < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
  
                < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                <column width = "80" type= "co" align= "left" sort= "str" >
                  Shipping
                  < option value= "1" > 1 </ option >
  
                  < option value= "2" > 2 </ option >
  
                  < option value= "3" > 3 </ option >
  
                  < option value= "4" > 10 </ option >
  
                  < option value= "5" > 20 </ option >
  
                  < option value= "6" > 30 </ option >
  
                </ column >
  
                < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
  
                < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
              <settings>
                <colwidth>px</colwidth>
                </settings>
            </head>
            <row id = "1" >
  
                < cell > -1500 </ cell >
  
                < cell > A Time to Kill</cell>
                <cell>John Grisham</cell>
              <cell>12.99</cell>
              <cell>1</cell>
              <cell>24</cell>
              <cell>0</cell>
              <cell>05/01/1998</cell>
            </row>
            <row id = "2" >
  
                < cell > 1000 </ cell >
  
                < cell > ABW ONLINE CLOUD WEBHOSTING SERVERS 4 YEAR BILLING QUAD ANUALLY BILLING  PER YEAR MONTH BILLING AND APP PORTAL MONTHLY CHARGEING RATES 3 MONTH TRIMONTHLY PAYMENT DUE EVERY 3 MONTHS 7.99 A MONTH PLUS $50 SERVICE CHARGE TO PLACE ORDER THROUGH SKYPE TELEPHONE AND E-MAIL </cell></cell>
              <cell>AARON BRADLEY WEST</cell>
              <cell>$350.92</cell>
              <cell>$7.31 PER MONTH PACKAGE</cell>
              <cell>$1.61 HST PER MONTH</cell>
              <cell> TOTAL $428.07 </cell>
              <cell>10\16\2018</cell>
            </row>
            <row id = "3" >
  
                < cell > -200 </ cell >
  
                < cell > ABW ONLINE CLOUD WEBHOSTING SERVERS YEARLY BILLING AND APP PORTAL MONTHLY CHARGEING RATES 3 MONTH TRIMONTHLY PAYMENT DUE EVERY 3 MONTHS 7.99 A MONTH PLUS $50 SERVICE CHARGE TO PLACE ORDER THROUGH SKYPE TELEPHONE AND E-MAIL </cell>
                <cell>Aaron Bradley West</cell>
              <cell>$7.99 a month</cell>
              <cell>$1.76 HST PER MONTH</cell>
              <cell>TOTAL $79.24 PER TRIMONTHLY 3 MONTH BILLING</cell>
              <cell>TOTAL PER YEAR $</cell>
              <cell>10/16/2018</cell>
              <using System="";>
              </using System;>
              <using System.Collections.Generic="";>
              </using System.Collections.Generic;
              <using System.Linq="";>
              </using System.Linq;>
              <using System.Text="";></using System.Text;>
              <using System.Threading.Tasks="";</using System.Threading.Tasks;></using>
              <using System.Windows;>
              <using System.Windows.Controls;>
              <using System.Windows.Data;>
              <using System.Windows.Documents;>
              <using System.Windows.Input;>
              <using System.Windows.Media;>
              <using System.Windows.Media.Imaging;>
              <using System.Windows.Navigation;>
              <using System.Windows.Shapes;>    
                    <namespace WpfApp1=""></namespace>
              {
              /// <summary>
                /// <Interaction logic="" for="" MainWindow.xaml=""></Interaction>
                ///
              </summary>
                <public partial="" class="" MainWindow="" :="" Window=""></public>
              {
              <public MainWindow()>
              {
              <InitializeComponent(main[]);></InitializeComponent>
              }
}
              }
            </row>
          </rows>
        </textarea>
      </body>
</html>
                                  </startup>
    </configuration>
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
            Console.WriteLine("Hello World!");
            Console.ReadKey();

            // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
        }
    }
}
 <install-script>   
                <Module:>
                    <PowerShellGet>
                     install script
                    [-name] <string[]>
                    [-MinimumVersion<Version>]
[-MaximumVersion<Version>]
[-RequiredVersion<Version>]
[-Repository<string[]>]
[-scope<string[]>]
[-NoPathUpdate]
[-Proxy<Uri>]
[-ProxyCredential<PSCredential>]
[-Credential<PSCredential>]
[-Force]
[-WhatIf]
[-Confirm]
[-CommonParameter<StringComparison[]>]
        <PowerShellCopy>
            <Install-Script>
            -InputObject<PSObject[]>
            [-NoPathUpdate]
            [-Proxy<Uri>]
            [-ProxyCredential<PSCredential>]
            [-Credential<PSCredential>]
            [-Force]
            [-WhatIf]
            [-Confirm]
            [-CommonParameter<StringComparison[]>]
        <$  <PS C:\>Find-Script-Repository("local1"<[https]://"abwonline\home">)-([namespace]"Required-Script2">)
        <$  <C:\>Find-Script-Repository("local1"<[https]://"abwonline\home">)([namespace]"Required-Script2")|<Install-Script>
        <$  <PS C:\>Get-Command-name"Required-Script2"<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">
        <$  <C:\Users\Pattif\Documents\WindowsPowerShell\Scripts\Required-Script2.ps1 PS C:\>Get
            -InstalledScript-namespace"RequiredScript2"[<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">]
            <html>
                [<version>                  :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>':'jason'">
                [<Type>                     :]  <" ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                [<Description>              :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>':'jason'">
                                            <"ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                                            "TYPE OPEN SOURCE LOAD POWER PUNCH OPEN SOURCE BROWSER DOORWAY TO LEASH DEPLOYMENT" 
                                            "FROM NOT BEING A VIRUS STEALING DEVICE DATA STORAGE IT RESTRAINES THE APP"
                                            "TO BEING A WEBHOSTED APP AND STAYS IN FULL CONNECT AS A WBHOSTED DOORWAY WITH A INNER DEVICE NODE"
                                            "A JASON TO GATHER INTEL IN TABLES TO SEARCH AND CONTROL DEPLOY TO ONE NAME SPACE OR KNOWN AS E-MAIL"
                                            "AS THE MASTER STORAGE SERVER ADDRESS AS A NAME SERVER SAVING THE IP."
                                            "RANDOMIZER AS A LARGE MASSS CONNECT IP RANDOMIZER PER NAME SERVER TO SYNC BLUETOOTH AND ALL WIRELESS DEVICES FLUENTLY"
                                            "TO USE THE DATA APN SUPPLIED TO THE DEVICE TO TURN INTO A BROAD WAVE LENGTH OF CELLULAR AND HIGH SECURITY DIGITAL FREQUENCEY"
                                            "AS ITS ONLY DITITAL SECURE FREQUENCEY RANDOMIZING IP IN SHORT WAVE LENGTH THROUGH BROAD WAVELENGTH TO STAY CONNECTED EVEN WHEN NO DATA"
                                            "MAKING THE FIRST CLOUD STORAGE THAT TURNS SIM CARDS FROM CELLULAR COMPANIES INTO A SAT COM UPLINK DATA CARD WITHOUT THEM KNOWING IT."
                                            "DUE TO THE MASSIVE RECONECT OF A GARUNTEED MATCH FROM THE TROJAN I LAUNCED 2003 TO STEAL DATA REGISTERED DOMAINS AND PASSWORDS AND TO CREAT A SAFE HAVEN"
                                            "FOR DIGITAL BANKING IN MY CLOUD SERVER FOR PURCHASE BUTTONS AND A GARUNTTED CONNECT TO REMOVE DATA RATE INTO ONE UN IP ADDRESS"
                                            "LINE REGISTERED UNDER MY NAME {007.036.068.038} OR {007.036.083.038} THROUGH THE MAILING LIST RETRIEVAL LIKE A VIRUS BUT IN A SECURE SETTING."> 
                [<pattif>                   :]  <
                [<Company Name>             :]  <" ABW ONLINE {OWNER AARON BRADLEY WEST} ">
                [<CopyRight>                :]  <" 2014 ABW ONLINE ALL RIGHTS RESERVED <owner:> 'AARON BRADLEY WEST' ">
                [<Published Date>           :]  <" 2018 OCTOBER 16TH"" 2003 JASON TROJAN"" 1994 TABLES AND CERTIFICATE ENGINE" " 1997 BANKING BRANCH BARRIED IN CEMENT IN AMY BASEMENT ">
                [LicenseUri                 :]  <" :http://required-script3.com/license   ">
                [ProjectUri                 :]  <" :http://required-script3.com   ">
                [IconUri                    :]  <"  :http://required-script3/icon)">
                [Tags                       :]  <"  :Tag1://(PowerPunchDriver)Tag2://(StaticVoidSearchNamspceServerSystemScript)Tag-Required-Script"([<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">])[{Tag1, Tag2,Tag-Required-Script3-2.5,PSScript....}]>
                [Includes                   :]  <"  :DataBase, SQL, PhP, Perl, Microsoft Server Center, Visual Studio, Word Press, FTp, E_mail, Install Vault Install Link Randomizer," >
                [PowerShellGetFormatVersion :]  <"  :To be submitted just like the others in 2003">
                [ReleaseNotes               :]  <"  :This software is a very volatile namespace server software and must stay locked up to protect clients identity to sensitive information when running at full programing running filesand must stay running but also must be severly secure to protect identities and is connected to banking so highest security">   
                [Dependencies               :]  <"  :https://abwonline.ca {APN} networks by {ABW ONLINE ADMINISTRATION}, AND {SUPPORT} ALL LEAD OFF OF {<main>} {DOMAIN}""also {\home} folder and {root folders} if created in devices a pairing with the {webhosted cloud server}" >
                [RepositorySourceLocation   :]  <"  :http://pattif-dev:8765/api/v2/">
                [Repository                 :]  <"local1"{https://abwonline\home}("https://abwonlin.abwonline.ca ['namespace'{'password[](arg.)'} ")"\home"]") (https://home.abwonline.ca){namespace[](arg)"[password]"}>
                [PackageManagementProvider  :]  <"NuGet">
                [InstalledLocation          :]  <":C:\Program Files\WindowsPowerShell\Scripts">     
        <? xml version="1.0" encoding="utf-8" ?>
<configuration>
    <startup>
        <supportedRuntime version = "v4.0" sku=".NETFramework,Version=v4.6.1" />
      {
  "<ExpandedNodes>": [
   <internal class="">
      <PSObject>
    </internal>
{<namespace ConsoleApp1=""></namespace>
{
    <class Program>
    {
        <static void=""></static> <https://abwonline.ca>(string[] args)
        {   [% <component.name></component.name> '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
            [% <component.caller> '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
            [% <component.callers> '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
            [% <PROCESS></PROCESS> 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
            [% <PROCESS></PROCESS> '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
            '<PROCESS> ('<:>'?   >%0<); ("<:>"?  <%1><=%100>)'
        }   "<process>:<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
    {<https://node><jason><namespace[<?1>?/ '   '"  "]#|N/%<arg>!>
    <using System>;
<using> <System.Collections.Generic;>
<using System.Linq;>
<using System.Text;>
<using System.Threading.Tasks;>

<namespace> <ConsoleApp2>
{
    class Program
{{
  "<ExpandedNodes>": [
   internal class PSObject
    {namespace ConsoleApp1
{
    class Program
    {
        static void <https://abwonline.ca>(string[] args)
        {   [% component.name '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
    [% component.caller '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
    [% component.callers '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
    [% PROCESS 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
    [% PROCESS '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
    '<PROCESS>
      ('<:>'?   >%0<); ("<:>"?  <%1>
        <=%100>)'
        }   "<process>
          :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
          }<https://node><jason>
            <namespace[<?1>?/ '   '"  "]#|N/%<arg>!>
}</namespace>   
    {<table> <install-script>   
                <Module:>
                    <PowerShellGet>
                     install script
                    [-name] <string[]>
                    [-MinimumVersion<Version>]
[-MaximumVersion<Version>]
[-RequiredVersion<Version>]
[-Repository<string[]>]
[-scope<string[]>]
[-NoPathUpdate]
[-Proxy<Uri>]
[-ProxyCredential<PSCredential>]
[-Credential<PSCredential>]
[-Force]
[-WhatIf]
[-Confirm]
[-CommonParameter<StringComparison[]>]
        <PowerShellCopy>
            <Install-Script>
            -InputObject<PSObject[]>
            [-NoPathUpdate]
            [-Proxy<Uri>]
            [-ProxyCredential<PSCredential>]
            [-Credential<PSCredential>]
            [-Force]
            [-WhatIf]
            [-Confirm]
            [-CommonParameter<StringComparison[]>]
        <$  <PS C:\>Find-Script-Repository("local1"<[https]://"abwonline\home">)-([namespace]"Required-Script2">)
        <$  <C:\>Find-Script-Repository("local1"<[https]://"abwonline\home">)([namespace]"Required-Script2")|<Install-Script>
        <$  <PS C:\>Get-Command-name"Required-Script2"<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">
        <$  <C:\Users\Pattif\Documents\WindowsPowerShell\Scripts\Required-Script2.ps1 PS C:\>Get
            -InstalledScript-namespace"RequiredScript2"[<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">]
            <html>
                [<version>                  :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>':'jason'">
                [<Type>                     :]  <" ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                [<Description>              :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>':'jason'">
                                            <"ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                                            "TYPE OPEN SOURCE LOAD POWER PUNCH OPEN SOURCE BROWSER DOORWAY TO LEASH DEPLOYMENT" 
                                            "FROM NOT BEING A VIRUS STEALING DEVICE DATA STORAGE IT RESTRAINES THE APP"
                                            "TO BEING A WEBHOSTED APP AND STAYS IN FULL CONNECT AS A WBHOSTED DOORWAY WITH A INNER DEVICE NODE"
                                            "A JASON TO GATHER INTEL IN TABLES TO SEARCH AND CONTROL DEPLOY TO ONE NAME SPACE OR KNOWN AS E-MAIL"
                                            "AS THE MASTER STORAGE SERVER ADDRESS AS A NAME SERVER SAVING THE IP."
                                            "RANDOMIZER AS A LARGE MASSS CONNECT IP RANDOMIZER PER NAME SERVER TO SYNC BLUETOOTH AND ALL WIRELESS DEVICES FLUENTLY"
                                            "TO USE THE DATA APN SUPPLIED TO THE DEVICE TO TURN INTO A BROAD WAVE LENGTH OF CELLULAR AND HIGH SECURITY DIGITAL FREQUENCEY"
                                            "AS ITS ONLY DITITAL SECURE FREQUENCEY RANDOMIZING IP IN SHORT WAVE LENGTH THROUGH BROAD WAVELENGTH TO STAY CONNECTED EVEN WHEN NO DATA"
                                            "MAKING THE FIRST CLOUD STORAGE THAT TURNS SIM CARDS FROM CELLULAR COMPANIES INTO A SAT COM UPLINK DATA CARD WITHOUT THEM KNOWING IT."
                                            "DUE TO THE MASSIVE RECONECT OF A GARUNTEED MATCH FROM THE TROJAN I LAUNCED 2003 TO STEAL DATA REGISTERED DOMAINS AND PASSWORDS AND TO CREAT A SAFE HAVEN"
                                            "FOR DIGITAL BANKING IN MY CLOUD SERVER FOR PURCHASE BUTTONS AND A GARUNTTED CONNECT TO REMOVE DATA RATE INTO ONE UN IP ADDRESS"
                                            "LINE REGISTERED UNDER MY NAME {007.036.068.038} OR {007.036.083.038} THROUGH THE MAILING LIST RETRIEVAL LIKE A VIRUS BUT IN A SECURE SETTING."> 
                [<pattif>                   :]  <
                [<Company Name>             :]  <" ABW ONLINE {OWNER AARON BRADLEY WEST} ">
                [<CopyRight>                :]  <" 2014 ABW ONLINE ALL RIGHTS RESERVED <owner:> 'AARON BRADLEY WEST' ">
                [<Published Date>           :]  <" 2018 OCTOBER 16TH"" 2003 JASON TROJAN"" 1994 TABLES AND CERTIFICATE ENGINE" " 1997 BANKING BRANCH BARRIED IN CEMENT IN AMY BASEMENT ">
                [LicenseUri                 :]  <" :http://required-script3.com/license   ">
                [ProjectUri                 :]  <" :http://required-script3.com   ">
                [IconUri                    :]  <"  :http://required-script3/icon)">
                [Tags                       :]  <"  :Tag1://(PowerPunchDriver)Tag2://(StaticVoidSearchNamspceServerSystemScript)Tag-Required-Script"([<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">])[{Tag1, Tag2,Tag-Required-Script3-2.5,PSScript....}]>
                [Includes                   :]  <"  :DataBase, SQL, PhP, Perl, Microsoft Server Center, Visual Studio, Word Press, FTp, E_mail, Install Vault Install Link Randomizer," >
                [PowerShellGetFormatVersion :]  <"  :To be submitted just like the others in 2003">
                [ReleaseNotes               :]  <"  :This software is a very volatile namespace server software and must stay locked up to protect clients identity to sensitive information when running at full programing running filesand must stay running but also must be severly secure to protect identities and is connected to banking so highest security">   
                [Dependencies               :]  <"  :https://abwonline.ca {APN} networks by {ABW ONLINE ADMINISTRATION}, AND {SUPPORT} ALL LEAD OFF OF {<main>} {DOMAIN}""also {\home} folder and {root folders} if created in devices a pairing with the {webhosted cloud server}" >
                [RepositorySourceLocation   :]  <"  :http://pattif-dev:8765/api/v2/">
                [Repository                 :]  <"local1"{https://abwonline\home}("https://abwonlin.abwonline.ca ['namespace'{'password[](arg.)'} ")"\home"]") (https://home.abwonline.ca){namespace[](arg)"[password]"}>
                [PackageManagementProvider  :]  <"NuGet">
                [InstalledLocation          :]  <":C:\Program Files\WindowsPowerShell\Scripts">     
        </table>
} "{
  "ExpandedNodes": [
   internal class PSObject
{namespace ConsoleApp1
{
    class Program
    {
        static void <https://abwonline.ca>(string[] args)
        {   [% <component.name> '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
            [% component.caller '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
            [% component.callers '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
            [% PROCESS 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
            [% PROCESS '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
            '<PROCESS>
              ('<:>'?   >%0<); ("<:>"?  <%1>
                <=%100>)'
                }   "<process>
                  :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
                  }<https://node><jason>
                    <namespace[<?1>?/ '   '"  "]#|N/%<arg>!>"
  ],
  "PreviewInSolutionExplorer": false
}
static void Main(string[] args)
{
    // The code provided will print ‘Hello World’ to the console.
    // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
    Console.WriteLine("Hello World!");
    Console.ReadKey();

    // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
}
}
}
<? xml version="1.0" encoding="utf-8"?>
<html>
  <head>
    <title>Grid mode</title>
    <meta name = "viewport" content= "width=device-width, initial-scale=1.0" >
      < link href= "https://fonts.googleapis.com/css?family=Roboto:400,500" rel= "stylesheet" >

        < script type= "text/javascript" src= "../../codebase/vault.js?v=3.0.0" ></ script >
        < link rel= "stylesheet" type= "text/css" href= "../../codebase/vault.css?v=3.0.0" >

          < script type= "text/javascript" src= "../common/js/index.js?v=3.0.0" ></ script >
          < link rel= "stylesheet" type= "text/css" href= "../common/dhx_samples.css?v=3.0.0" >


            < !--metrics-- >
            < script >
              (function(i, s, o, g, r, a, m){
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function(){
        (i[r].q = i[r].q ||[]).push(arguments)},i[r].l = 1 * new Date(); a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
              })(window, document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-11031269-1', 'auto');
ga('send', 'pageview');
            </script>
            <!-- error tracking -->
            <script src = "https://cdn.ravenjs.com/3.19.1/raven.min.js" crossorigin="anonymous"></script>
            <script>Raven.config('https://a2578da6be394598bfe003e4dbb3a394@sentry.dhtmlx.ru/13').install()</script>
          </head>
  <body>
    <div id = "test" class="container"></div>
    <script>
      var vault = new dhx.Vault('test', {
      mode: "grid",
      uploader: {
      target: "/vault/backend/upload"
      }
});
      vault.data.parse(filesData);
	  <URL://>HTTPS://ABWONLINE.CA
<xs:schema targetNamespace="http://tempuri.org/XMLSchema.xsd"
    elementFormDefault="qualified"
    xmlns="http://tempuri.org/XMLSchema.xsd"
    xmlns:mstns="http://tempuri.org/XMLSchema.xsd"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
  <using System>/using> System;
  <using System.Collections.Generic>;
  <using System.Linq=""></using>;
  <using System.Text=""></using>;
  <using System.Threading.Tasks=""></using>;
  <namespace ConsoleApp1="">;</namespace>
  {
  <class Program=""></class>
  {
  <static void=""></static> <https://abwonline.ca>(string[] args)
  {   [% <component.name></component.name> '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
  [% <component.caller></component.caller> '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
  [% <component.callers></component.callers> '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
  [% <PROCESS 'middle.tt2>' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
  [% <PROCESS>https://abwonline.ca</PROCESS> '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
  '<PROCESS>
    ('<:>'?   >%0<); ("<:>"?  <%1>
      <=%100>)'
      }   "<process>
        :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
        <using System=""></using>;
        <using System.Collections.Generic=""></using>;
        <using System.Linq=""></using>;
        <using System.Text=""></using>;
        <using System.Threading.Tasks=""></using>;
        <using System.Windows=""></using>;
        <using System.Windows.Controls=""></using>;
        <using System.Windows.Data=""></using>;
        <using System.Windows.Documents=""></using>;
        <using System.Windows.Input=""></using>;
        <using System.Windows.Media=""></using>;
        <using System.Windows.Media.Imaging=""></using>;
        <using System.Windows.Navigation=""></using>;
        <using System.Windows.Shapes=""></using>;
        <namespace abwonline.ca=""></namespace>
        {
        /// <summary>
          /// <Interaction logic=""></Interaction> for <MainWindow.xaml>https://abwonline.ca</MainWindow.xaml>
          ///
        </summary>
          <public partial=""></public> <class MainWindow="">https://home.abwonline.ca</class> : Window
        {
        <public MainWindow=""></public>(<?xml version = "1.0" encoding= "utf-8" ?>
        <using></using> <System;></System>'using <System.Collections.Generic;></System.Collections.Generic>
        <using>
          <System.Linq;>
            <using>
              <System.Text;></System.Text>
              <using>
                <System.Threading.Tasks;></System.Threading.Tasks>
                <using>
                  <System.Windows;></System.Windows>
                  <using>
                    <System.Windows.Controls;></System.Windows.Controls>
                    <using>
                      <System.Windows.Data;></System.Windows.Data>
                      <using>
                        <System.Windows.Documents;></System.Windows.Documents>
                        <using>
                          <System.Windows.Input;></System.Windows.Input>
                          <using>
                            <System.Windows.Media;></System.Windows.Media>
                            <using>
                              <System.Windows.Media.Imaging;></System.Windows.Media.Imaging>
                              <using>
                                <System.Windows.Navigation;></System.Windows.Navigation>
                                <using>
                                  <System.Windows.Shapes;></System.Windows.Shapes>
                                  <namespace>
                                    <WpfApp1>
                                      {
                                      /// <summary>
                                        /// <??><interaction> logic for <MainWindow.xaml>https://abwonline.ca</MainWindow.xaml>
                                        ///
                                      </summary>
                                      <public>
                                        "<public_html>
                                          "'<root>https://home.abwonline.ca</root>
                                      </public>
                                      <partial>https://Dir.abwonline.ca</partial>
                                      <class>https://Dir.abwonline.ca</class>
                                      <MainWindow>https://abwonline.ca</MainWindow> :
                                      <Window>https://abwonline.ca</Window>
                                      {
                                      <public MainWindow=""()>
                                        {
                                        <InitializeComponent()>
                                          ;
                                          }
                                          }
                                          }
                                          <html>
                                            [% <include table=""></include> %]
                                            [% <Block table="">
                                              %]
                                              [% <title></title> %
                                              </table>
                                              <connect>
                                                <https: xmlns:https=""/<{http://abwonline.ca}>
                                                <{:}>
                                                {http://mail.template-toolkit.org/mailman/listinfo/templates}
                                                {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                <mail>
                                                  <title>
                                                    [% <e-mail cloud=""></e-mail> %]
                                                  </title>
                                                  </Html>
                                                </mail>
                                                <redirect>
                                                  <mail>
                                                    <:><redirect>
                                                      {https://mail.abwonline.ca}>
                                                      <:> <redirect:>
                                                        <ftps://"mail.abwonline.ca">
                                                        <:><inbox>
                                                          <ftps.inbox.abwonline.ca>
                                                            <:><ftps: xmlns:ftps="inbox"/
                                                            </mail.abwonline.ca.inbox>
                                                            <ftps.inbox.abwonline.ca>
                                                              <? xml version="1.0" encoding="utf-8"?>
                    <using></using> <System;></System>'using <System.Collections.Generic;></System.Collections.Generic>
                                                              <using>
                                                                <System.Linq;>
                                                                  <using>
                                                                    <System.Text;></System.Text>
                                                                    <using>
                                                                      <System.Threading.Tasks;></System.Threading.Tasks>
                                                                      <using>
                                                                        <System.Windows;></System.Windows>
                                                                        <using>
                                                                          <System.Windows.Controls;></System.Windows.Controls>
                                                                          <using>
                                                                            <System.Windows.Data;></System.Windows.Data>
                                                                            <using>
                                                                              <System.Windows.Documents;></System.Windows.Documents>
                                                                              <using>
                                                                                <System.Windows.Input;></System.Windows.Input>
                                                                                <using>
                                                                                  <System.Windows.Media;></System.Windows.Media>
                                                                                  <using>
                                                                                    <System.Windows.Media.Imaging;></System.Windows.Media.Imaging>
                                                                                    <using>
                                                                                      <System.Windows.Navigation;></System.Windows.Navigation>
                                                                                      <using>
                                                                                        <System.Windows.Shapes;></System.Windows.Shapes>
                                                                                        <namespace>
                                                                                          <WpfApp1>
                                                                                            {
                                                                                            /// <summary>
                                                                                              /// <Interaction><https://abwonline.ca {value;1,(\<home>)}<https://abwonlin.abwonline.ca></home>\</Interaction> logic for <MainWindow.xaml>
                                                                      https://abwonline.ca                          
                                                                        </MainWindow.xaml>                        
                                                                             ///                 
                                                                             </summary>               
                                                                               <public>             
                                                                                <public_html>
                                                                                  <value;0,"root">https://abwonline.ca'<\root>
                                                                                    </public>_<html>
                                                                                      <xml>https://abwonline.ca</xml>
                                                                                          </html>
                                                                                            <partial>https://abwonline.ca
                                                                                              </partial>
                                                                                            <class>https://abwonline.ca
                                                                                              </class>
                                                                                            <MainWindow>https://abwonline.ca
                                                                                              </MainWindow> :
                                                                                            <Window>https://abwonline.ca
                                                                                              </Window>
                                                                                            {
                                                                                            <public MainWindow=""(https://abwonline.ca)>
                                                                                              {
                                                                                              <InitializeComponent(https://abwonline.ca)>
                                                                                                ;
                                                                                                }
                                                                                           }
                                                                                      }
                                                                                <html>
                                                                                        [% <include table=""></include> %]
                                                                                        [% <Block table="">
                                                                                               %]
                                                                                          [% <title></title> %
                                                                                               </table>
                                                                                                    <connect>
                                                                                                      <https: xmlns:https=""/<{http://abwonline.ca}>
                                                                                                      <{:}>
                                                                                                      {http://mail.template-toolkit.org/mailman/listinfo/templates}
                                                                                                      {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                                                                      {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                                                                      <mail>
                                                                                                        <title>
                                                                                                          [% <e-mail cloud=""></e-mail> %]
                                                                                                        </title>
                                                                                                        </Html>
                                                                                                      </mail>
                                                                                                      <redirect>
                                                                                                        <mail>
                                                                                                          <:><redirect>
                                                                                                            {https://mail.abwonline.ca}>
                                                                                                            <:> <redirect:>
                                                                                                              <ftps://ftps.abwonline.ca>
                                                                                                              <:><inbox>
                                                                                                                <ftps.inbox.abwonline.ca>
                                                                                                                  <:><ftps: xmlns:ftps="inbox"/
                                                                                                                  </mail.abwonline.ca.inbox>
                                                                                                                    <ftps.inbox.abwonline.ca></ftps.inbox.abwonline.ca>
                                                                                                                [</ftps://["<user namespace=""></user>"<:>{'<username></username>'}]<.abwonline.ca>
                                                                                                                  "<.inbox>
                                                                                                                    "'<inbox></inbox>'>]
                                                                                                                    <:></ftpsinbox.abwonline.ca>
                                                                                                                  </redirect>
                                                                                                            </connect>
                                                                                                    <?xml version="1.0" encoding="utf-8"?>
                                                                                                    <Project ToolsVersion="15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
                                                                                                      <Import Project="$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
                                                                                                      <PropertyGroup>
                                                                                                        <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
                                                                                                        <Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
                                                                                                        <ProjectGuid>{A382D358-4D91-4DA7-A540-EBE717AD2753}</ProjectGuid>
                                                                                                        <OutputType>Exe</OutputType>
                                                                                                        <RootNamespace>ConsoleApp2</RootNamespace>
                                                                                                        <AssemblyName>ConsoleApp2</AssemblyName>
                                                                                                        <TargetFrameworkVersion>v4.6.1</TargetFrameworkVersion>
                                                                                                        <FileAlignment>512</FileAlignment>
                                                                                                        <AutoGenerateBindingRedirects>true</AutoGenerateBindingRedirects>
                                                                                                        <Deterministic>true</Deterministic>
                                                                                                      </PropertyGroup>
                                                                                                      <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' " >
                                                                                                        < PlatformTarget > AnyCPU </ PlatformTarget >
                                                                                                        < DebugSymbols > true </ DebugSymbols >
                                                                                                        < DebugType > full </ DebugType >
                                                                                                        < Optimize > false </ Optimize >
                                                                                                        < OutputPath > bin\Debug\</OutputPath>
                                                                                                        <DefineConstants>DEBUG;TRACE</DefineConstants>
                                                                                                        <ErrorReport>prompt</ErrorReport>
                                                                                                        <WarningLevel>4</WarningLevel>
                                                                                                      </PropertyGroup>
                                                                                                      <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Release|AnyCPU' " >
                                                                                                        < PlatformTarget > AnyCPU </ PlatformTarget >
                                                                                                        < DebugType > pdbonly </ DebugType >
                                                                                                        < Optimize > true </ Optimize >
                                                                                                        < OutputPath > bin\Release\</OutputPath>
                                                                                                        <DefineConstants>TRACE</DefineConstants>
                                                                                                        <ErrorReport>prompt</ErrorReport>
                                                                                                        <WarningLevel>4</WarningLevel>
                                                                                                      </PropertyGroup>
                                                                                                      <ItemGroup>
                                                                                                        <Reference Include = "System" />
                                                                                                        < Reference Include="System.Core" />
                                                                                                        <Reference Include = "System.Xml.Linq" />
                                                                                                        < Reference Include="System.Data.DataSetExtensions" />
                                                                                                        <Reference Include = "Microsoft.CSharp" />
                                                                                                        < Reference Include="System.Data" />
                                                                                                        <Reference Include = "System.Net.Http" />
                                                                                                        < Reference Include="System.Xml" />
                                                                                                      </ItemGroup>
                                                                                                      <ItemGroup>
                                                                                                        <Compile Include = "<F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\gem b ox e-mail.cs"OPEN=""/>
                                                                                                        <Compile Include = "<F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\AssemblyInfo.cs"OPEN="">
                                                                                                          <Link>
                                                                                                            <Properties\AssemblyInfo.cs>"JScript"</Properties:AssemblyInfo.cs>
                                                                                                          </Link>
                                                                                                        </Compile>
                                                                                                      </ItemGroup>
                                                                                                      <ItemGroup>
                                                                                                        <None Include = "App.config" />
                                                                                                        </ ItemGroup >
                                                                                                        < <Import Project=""></Import>="<$(MSBuildToolsPath)\Microsoft.CSharp.targets>" />
                                                                                                    </Project><? xml version="1.0" encoding="UTF-8"
                                                                                                      <head>
                                                                                                        <afterInit>
                                                                                                          <call command = "<setColumnHidden></setColumnHidden>" >
                                                                                                            < param > 1 </ param >
                                                                                                            < param > true </ param >
                                                                                                            </ call >
                                                                                                            </ afterInit >
                                                                                                            < column width="70" type="dyn" align="right"  sort="str">Sales</column>
                                                                                                            <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
                                                                                                            <column width = "*" type= "ed" align= "left"  sort= "str" >
                                                                                                              Author </ column >
                                                                                                              < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
                                                                                                              < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                            <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                              Shipping
                                                                                                              < option value= "1" > 1 </ option >
                                                                                                              < option value= "2" > 2 </ option >
                                                                                                              < option value= "3" > 3 </ option >
                                                                                                              < option value= "4" > 10 </ option >
                                                                                                              < option value= "5" > 20 </ option >
                                                                                                              < option value= "6" > 30 </ option >
                                                                                                              </ column >
                                                                                                              < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
                                                                                                              < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                            <settings>
                                                                                                              <colwidth>px</colwidth>
                                                                                                            </settings>
                                                                                                          </head>
                                                                                                      <row id = "1" >
                                                                                                        < cell > -1500 </ cell
                                                                                                        < cell > A Time to Kill</cell>
                                                                                                        <cell>John Grisham</cell>
                                                                                                        <cell>12.99</cell>
                                                                                                        <cell>1</cell>
                                                                                                        <cell>24</cell>
                                                                                                        <cell>0</cell>
                                                                                                        <cell>05/01/1998</cell>
                                                                                                      </row>
                                                                                                      <row id = "2" >

                                                                                                        < cell > 1000 </ cell >

                                                                                                        < cell > Blood and Smoke</cell>
                                                                                                        <cell>Stephen King</cell>
                                                                                                        <cell>0</cell>
                                                                                                        <cell>1</cell>
                                                                                                        <cell>24</cell>
                                                                                                        <cell>0</cell>
                                                                                                        <cell>01/01/2000</cell>
                                                                                                      </row>
                                                                                                      <row id = "3" >

                                                                                                        < cell > -200 </ cell >

                                                                                                        < cell > The Rainmaker</cell>
                                                                                                        <cell>John Grisham</cell>
                                                                                                        <cell>7.99</cell>
                                                                                                        <cell>0</cell>
                                                                                                        <cell>48</cell>
                                                                                                        <cell>0</cell>
                                                                                                        <cell>12/01/2001</cell>
                                                                                                      </row>
                                                                                                    </rows>
                                                                                                    <!DOCTYPE html>
                                                                                                    <!--pro-->
                                                                                                    <html>
                                                                                                      <head>
                                                                                                        <title>Run commands from XML</title>
                                                                                                        <meta http-equiv= "Content-Type" content= "text/html; charset=UTF-8" />

                                                                                                        < meta http-equiv= "X-UA-Compatible" content= "IE=edge" />
  
                                                                < link rel= "<stylesheet>" type= "text/css" href= "../../../codebase/fonts/font_roboto/roboto.css" />
  
                                                                < link rel= "stylesheet" type= "text/css" href= "../../../codebase/dhtmlx.css" />
  
                                                                < script src= "../../../codebase/dhtmlx.js" ></ script >

                                                                                                        < script >
                                                                  function loadGridFromString(){
    myGrid = new dhtmlXGridObject('gridbox');
    myGrid.setDelimiter("|");
    //myGrid.setStyle("text-align:center", "", "", "");
    myGrid.setImagePath("../../../codebase/imgs/");
    myGrid.parse(document.getElementById("gridcont1").value);
}
function loadGridFromString2()
{
    myGrid2 = new dhtmlXGridObject('gridbox2');
    myGrid2.setImagePath("../../../codebase/imgs/");
    myGrid2.parse(document.getElementById("gridcont2").value);
}
                                                              </script>
                                                                                                      </head>
                                                                                                      <body>
                                                                                                        <h1>Run grid methods from XML</h1>
                                                                                                        <p>You are allowed to use methods before grid intialization:</p>
                                                                                                        <div>
                                                                                                          <li>
                                                                                                            Example:  <a href = "javascript:void(0)" onClick="loadGridFromString()">Load grid with web skin</a> set from XML by calling setSkin method before grid initialization
                                                                                                          </li>
                                                                                                        </div>
                                                                                                        <br>
                                                                                                          <div id = "gridbox" style="width:650px; height:165px; background-color:white;"></div>
                                                                                                          The same as with script:<br/>
                                                                                                          <textarea id = "gridcont1" style="width:650px;height:150px;">
                                                                                                            <? xml version="1.0" encoding="UTF-8"?>
                                                                                                            <rows>
                                                                                                              <head>
                                                                                                                <beforeInit>
                                                                                                                  <call command = "setSkin" >
                                                                                                                    < param > material </ param >
                                                                                                                    </ call >
                                                                                                                    < call command="setStyle">
                                                                          <param>text-align:center;</param>
                                                                                                                  </call>
                                                                                                                </beforeInit>
                                                                                                                <column width = "70" type="dyn" align="right"  sort="str">Sales</column>
                                                                                                                <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
                                                                                                                <column width = "100" type= "ed" align= "left"  sort= "str" >
                                                                                                                  Author </ column >
                                                                                                                  < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
                                                                                                                  < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                  Shipping
                                                                                                                  < option value= "1" > 1 </ option >
                                                                                                                  < option value= "2" > 2 </ option >
                                                                                                                  < option value= "3" > 3 </ option >
                                                                                                                  < option value= "4" > 10 </ option >
                                                                                                                  < option value= "5" > 20 </ option >
                                                                                                                  < option value= "6" > 30 </ option >
                                                                                                                  </ column >
                                                                                                                  < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
                                                                                                                  < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                <settings>
                                                                                                                  <colwidth>px</colwidth>
                                                                                                                </settings>
                                                                                                              </head>
                                                                                                              <row id = "1" >
                                                                                                                < cell > -1500 </ cell >
                                                                                                                < cell > A Time to Kill</cell>
                                                                                                                <cell>John Grisham</cell>
                                                                                                                <cell>12.99</cell>
                                                                                                                <cell>1</cell>
                                                                                                                <cell>24</cell>
                                                                                                                <cell>0</cell>
                                                                                                                <cell>05/01/1998</cell>
                                                                                                              </row>
                                                                                                              <row id = "2" >
                                                                                                                < cell > 1000 </ cell >
                                                                                                                < cell > Blood and Smoke</cell>
                                                                                                                <cell>Stephen King</cell>
                                                                                                                <cell>0</cell>
                                                                                                                <cell>1</cell>
                                                                                                                <cell>24</cell>
                                                                                                                <cell>0</cell>
                                                                                                                <cell>01/01/2000</cell>
                                                                                                              </row>
                                                                                                              <row id = "3" >
                                                                                                                < cell > -200 </ cell >
                                                                                                                < cell > The Rainmaker</cell>
                                                                                                                <cell>John Grisham</cell>
                                                                                                                <cell>7.99</cell>
                                                                                                                <cell>0</cell>
                                                                                                                <cell>48</cell>
                                                                                                                <cell>0</cell>
                                                                                                                <cell>12/01/2001</cell>
                                                                                                              </row>
                                                                                                            </rows>
                                                                                                          </textarea>
                                                                                                          <p>Also, you can run methods after grid intialization</p>
                                                                                                          <div>
                                                                                                            <li>
                                                                                                              Example:  <a href = "javascript:void(0)" onClick= "loadGridFromString2()" > Load grid and set the 2nd column hidden</a> by calling setColumnHidden method from xml after grid initialization
                                                                                                            </li>
                                                                                                          </div><br>
                                                                                                            <div id = "gridbox2" style= "width:650px;height:150px;background-color:white;" >
                                                                                                              </ div >
                                                                                                              The same as with script:<br/>
                                                                                                              <textarea id = "gridcont2" style= "width:650px;height:150px;" >
                                                                                                                <? xml version = "1.0" encoding= "UTF-8" ?>
                                                                      < rows >
                                                                        < head >
                                                                          < afterInit
                                                                            < call command = "setColumnHidden" >
                                                                              < param    > 1 </ param >
                                                                                                             < param > true </ param >
                                                                                                                </ call >
                                                                                                                </ afterInit >
                                                                                                                < column width= "70" type= "dyn" align= "right"  sort= "str" > Sales </ column >
                                                                                                                < column width= "150" type= "ed" align= "left"  sort= "str" > Book Title</column>
                                                                                                                <column width = "*" type= "ed" align= "left"  sort= "str" >
                                                                                                                  Author </ column >
                                                                                                                  < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
                                                                                                                  < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                  Shipping
                                                                                                                  < option value= "1" > 1 </ option >
                                                                                                                  < option value= "2" > 2 </ option >
                                                                                                                  < option value= "3" > 3 </ option >
                                                                                                                  < option value= "4" > 10 </ option >
                                                                                                                  < option value= "5" > 20 </ option >
                                                                                                                  < option value= "6" > 30 </ option >
                                                                                                                  </ column >
                                                                                                                  < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
                                                                                                                  < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                <settings>
                                                                                                                  <colwidth>px</colwidth>
                                                                                                                </settings>
                                                                                                                </head>
                                                                                                                <row id = "1" >
                                                                                                                  < cell > -1500 </ cell >
                                                                                                                  < cell > A Time to Kill</cell>
                                                                                                                  <cell>John Grisham</cell>
                                                                                                                  <cell>12.99</cell>
                                                                                                                  <cell>1</cell>
                                                                                                                  <cell>24</cell>
                                                                                                                  <cell>0</cell>
                                                                                                                  <cell>05/01/1998</cell>
                                                                                                                </row>
                                                                                                                <row id = "2" >
                                                                                                                  < cell > 1000 </ cell >
                                                                                                                  < cell > Blood and Smoke</cell>
                                                                                                                  <cell>Stephen King</cell>
                                                                                                                  <cell>0</cell>
                                                                                                                  <cell>1</cell>
                                                                                                                  <cell>24</cell>
                                                                                                                  <cell>0</cell>
                                                                                                                  <cell>01/01/2000</cell>
                                                                                                                </row>
                                                                                                                <row id = "3" >
                                                                                                                  < cell > -200 </ cell >
                                                                                                                  < cell > The Rainmaker</cell>
                                                                                                                  <cell>John Grisham</cell>
                                                                                                                  <cell>7.99</cell>
                                                                                                                  <cell>0</cell>
                                                                                                                  <cell>48</cell>
                                                                                                                  <cell>0</cell>
                                                                                                                  <cell>12/01/2001</cell>
                                                                                                                </row>
                                                                                                                </rows>
                                                                                                              </textarea>
                                                                                                            </body>
                                                                                                    </html>
                                                                                                  </inbox><redirect>
                                                          [</ftps://["<user namespace=""></user>"<:>{'<username></username>'}]<.abwonline.ca>
                                                            "<.inbox>
                                                              "'<inbox></inbox>'>]
                                                              <:></ftpsinbox.abwonline.ca>
                                                        </redirect>
                                                      </connect>)
                                              {
                                              <InitializeComponent()></InitializeComponent>;
                                              }
                                              <private void InitializeComponent()>
                                              {
                                              <throw new NotImplementedException()>;
                                              }<https://node><jason>
                                                <namespace[<?1>?/ '   '"  "]#|N/%<arg>!>
    <? xml version="1.0" encoding="utf-8"?>
                                                  <html>
                                                    <head>
                                                      <title>Grid mode</title>
                                                      <meta name = "viewport" content= "width=device-width, initial-scale=1.0" >
                                                        < link href= "https://fonts.googleapis.com/css?family=Roboto:400,500" rel= "stylesheet" >

        < script type= "text/javascript" src= "../../codebase/vault.js?v=3.0.0" ></ script >
                                                        < link rel= "stylesheet" type= "text/css" href= "../../codebase/vault.css?v=3.0.0" >

          < script type= "text/javascript" src= "../common/js/index.js?v=3.0.0" ></ script >
                                                        < link rel= "stylesheet" type= "text/css" href= "../common/dhx_samples.css?v=3.0.0" >


            < !--metrics-- >
            < script >
              (function(i, s, o, g, r, a, m){
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function(){
        (i[r].q = i[r].q ||[]).push(arguments)},i[r].l = 1 * new Date(); a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
              })(window, document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-11031269-1', 'auto');
ga('send', 'pageview');
            </script>
              <create>('create'"window", "document", 'script','//www.google-analytics.com/analytics.js','ga);\</create>
                                                        <!-- error tracking -->
                                                        <script src = "https://cdn.ravenjs.com/3.19.1/raven.min.js" crossorigin="anonymous"></script>
                                                        <script>Raven.config('https://a2578da6be394598bfe003e4dbb3a394@sentry.dhtmlx.ru/13').install()</script>
                                                      </head>
                                                    <body>
                                                      <div id = "test" class="container"></div>
                                                      <script>
                                                        var vault = new dhx.Vault('test', {
                                                        mode: "grid",
                                                        uploader: {
                                                        target: "/vault/backend/upload"
                                                        }
                                                        });
                                                        vault.data.parse(filesData);
                                                      </script>
                                                    </body>
                                                  </html>
                                                  }
                                                </namespace>
                                                {<table>
                                                  <install-script>
                                                    <Module:>
                                                      <PowerShellGet>
                                                        install script
                                                        [-name] <string[]>
                                                          [-MinimumVersion <Version>
                                                            ]
                                                            [-MaximumVersion <Version>
                                                              ]
                                                              [-RequiredVersion <Version>
                                                                ]
                                                                [-Repository <string[]>
                                                                  ]
                                                                  [-scope <string[]>
                                                                    ]
                                                                    [-NoPathUpdate]
                                                                    [-Proxy <Uri>
                                                                      ]
                                                                      [-ProxyCredential <PSCredential>
                                                                        ]
                                                                        [-Credential <PSCredential>
                                                                          ]
                                                                          [-Force]<force>
                                                                            [-WhatIf]
                                                                            [-Confirm]
                                                                            [-CommonParameter<StringComparison[]>
                                                                              ]
                                                                              <PowerShellCopy>
                                                                                <Install-Script>
                                                                                  -InputObject <PSObject[]>
                                                                                    [-NoPathUpdate]
                                                                                    [-Proxy <Uri>
                                                                                      ]
                                                                                      [-ProxyCredential <PSCredential>
                                                                                        ]
                                                                                        [-Credential <PSCredential>
                                                                                          ]
                                                                                          [-Force]
                                                                                          [-WhatIf]
                                                                                          [-Confirm]
                                                                                          [-CommonParameter <StringComparison[]>
                                                                                            ]
                                                                                            <$  <PS C:=""\>
                                                                                              Find-Script-Repository("local1"<[https]://"abwonline\home">)-([namespace]"Required-Script2">)
                                                                                              <$  <C:\>
                                                                                                Find-Script-Repository("local1"<[https]://"abwonline\home">)([namespace]"Required-Script2")|<Install-Script>
                                                                                                  <$
                                                                                                  <PS C:=""\>
                                                                                                    Get-Command-name"Required-Script2"<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">
                                                                                                    <$  <C:\Users\Pattif\Documents\WindowsPowerShell\Scripts\Required-Script2.ps1 PS="" C:=""\>
                                                                                                      Get
                                                                                                      -InstalledScript-namespace"RequiredScript2"[<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">]
                                                                                                      <html>
                                                                                                        [<version>
                                                                                                          :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>
                                                                                                            ':'jason'">
                                                                                                            [<Type>
                                                                                                              :]  <" ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                                                                                                              [<Description>
                                                                                                                :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>
                                                                                                                  ':'jason'">
                                                                                                                  <{ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                                                                                                                  "TYPE OPEN SOURCE LOAD POWER PUNCH OPEN SOURCE BROWSER DOORWAY TO LEASH DEPLOYMENT"
                                                                                                                  "FROM NOT BEING A VIRUS STEALING DEVICE DATA STORAGE IT RESTRAINES THE APP"
                                                                                                                  "TO BEING A WEBHOSTED APP AND STAYS IN FULL CONNECT AS A WBHOSTED DOORWAY WITH A INNER DEVICE NODE"
                                                                                                                  "A JASON TO GATHER INTEL IN TABLES TO SEARCH AND CONTROL DEPLOY TO ONE NAME SPACE OR KNOWN AS E-MAIL"
                                                                                                                  "AS THE MASTER STORAGE SERVER ADDRESS AS A NAME SERVER SAVING THE IP."
                                                                                                                  "RANDOMIZER AS A LARGE MASSS CONNECT IP RANDOMIZER PER NAME SERVER TO SYNC BLUETOOTH AND ALL WIRELESS DEVICES FLUENTLY"
                                                                                                                  "TO USE THE DATA APN SUPPLIED TO THE DEVICE TO TURN INTO A BROAD WAVE LENGTH OF CELLULAR AND HIGH SECURITY DIGITAL FREQUENCEY"
                                                                                                                  "AS ITS ONLY DITITAL SECURE FREQUENCEY RANDOMIZING IP IN SHORT WAVE LENGTH THROUGH BROAD WAVELENGTH TO STAY CONNECTED EVEN WHEN NO DATA"
                                                                                                                  "MAKING THE FIRST CLOUD STORAGE THAT TURNS SIM CARDS FROM CELLULAR COMPANIES INTO A SAT COM UPLINK DATA CARD WITHOUT THEM KNOWING IT."
                                                                                                                  "DUE TO THE MASSIVE RECONECT OF A GARUNTEED MATCH FROM THE TROJAN I LAUNCED 2003 TO STEAL DATA REGISTERED DOMAINS AND PASSWORDS AND TO CREAT A SAFE HAVEN"
                                                                                                                  "FOR DIGITAL BANKING IN MY CLOUD SERVER FOR PURCHASE BUTTONS AND A GARUNTTED CONNECT TO REMOVE DATA RATE INTO ONE UN IP ADDRESS"
                                                                                                                  "LINE REGISTERED UNDER MY NAME {007.036.068.038} OR {007.036.083.038} THROUGH THE MAILING LIST RETRIEVAL LIKE A VIRUS BUT IN A SECURE SETTING.}>
                                                                                                                  [<pattif>
                                                                                                                    :]  <
                [<Company Name="">
                                                                                                                      :]  < ABW ONLINE {OWNER AARON BRADLEY WEST} >
                                                                                                                      [<CopyRight>
                                                                                                                        :]  <{ 2014 ABW ONLINE ALL RIGHTS RESERVED <owner:}>
                                                                                                                          <admin{'abwonlin'"admin"AARON BRADLEY WEST}>
                                                                                                                          [<Published Date="">
                                                                                                                            :]  <{ 2018 OCTOBER 16TH"" 2003 JASON TROJAN"" 1994 TABLES AND CERTIFICATE ENGINE" " 1997 BANKING BRANCH BARRIED IN CEMENT IN AMY BASEMENT }>
                                                                                                                            [LicenseUri                 :]  <{ http://required-script3.com/license   }>
                                                                                                                            [ProjectUri                 :]  <{ :http://required-script3.com   }>
                                                                                                                            [IconUri                    :]  <{  :http://required-script3/icon)}>
                                                                                                                            [Tags                       :]  <{  :Tag1://(<PowerPunchDriver>)Tag2://(<StaticVoidSearchNamspceServerSystemScript xmlns:StaticVoidSearchNamspceServerSystemScript=""></StaticVoidSearchNamspceServerSystemScript:StaticVoidSearchNamspceServerSystemScript>)Tag-Required-Script"([<<https://"abwonline.ca.(',')("<:>")(<drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch>)(',')">])[{Tag1, Tag2,Tag-Required-Script3-2.5,PSScript....}]>
                                                                                                                            [Includes                   :]  <{  :DataBase, SQL, PhP, Perl, Microsoft Server Center, Visual Studio, Word Press, FTp, E_mail, Install Vault Install Link Randomizer,} >
                                                                                                                            [PowerShellGetFormatVersion :]  <{  :To be submitted just like the others in 2003}>
                                                                                                                            [ReleaseNotes               :]  <{  :This software is a very volatile namespace server software and must stay locked up to protect clients identity to sensitive information when running at full programing running filesand must stay running but also must be severly secure to protect identities and is connected to banking so highest security}>
                                                                                                                            [Dependencies               :]  <{  :https://abwonline.ca <APN networks by {ABW ONLINE ADMINISTRATION}, AND {SUPPORT} ALL LEAD OFF OF ><main>
                                                                                                                              {( )} {DOMAIN}""also {\home} folder and {root folders} if created in devices a pairing with the {webhosted cloud server}} >
                                                                                                                              [RepositorySourceLocation   :]  <{  :http://pattif-dev:8765/api/v2/}>
                                                                                                                              [Repository                 :]  <{local1 <https://abwonline\home\("https://abwonlin.abwonline.ca ['namespace'{'password[](arg.)'} ")"\home"]") (https://home.abwonline.ca){namespace[](arg)"[password]"}>
                                                                                                                              [PackageManagementProvider  :]  <{NuGet}>
                                                                                                                              [InstalledLocation          :]  <{:C:\Program Files\WindowsPowerShell\Scripts}>
                                                                                                                            </table>
                                                }{
                                                "ExpandedNodes": [
                                                internal class PSObject
                                                {namespace ConsoleApp1
                                                {
                                                class Program
                                                {
                                                <static void="(https://abwonlin.abwonline.ca)"></static> <https://abwonline.ca>(string[] args)
                                                {   [% component.name '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
                                                [% component.caller '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
                                                [% component.callers '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
                                                [% PROCESS 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
                                                [% PROCESS '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
                                                '<PROCESS>
                                                  ('<:>'?   >%0<); ("<:>"?  <%1>
                                                    <=%100>)'
                                                    }   "<process>
                                                      :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<100%//'<node>'</node>>
                                                      }<https://node><jason>
                                                        <namespace[<?1>?/ '   '"  "]#|N/% <arg.> !>
    <? xml version="1.0" encoding="utf-8"?>
                                                        <using></using> <System;></System>'using <System.Collections.Generic;></System.Collections.Generic>
                                                        <using>
                                                          <System.Linq;>
                                                            <using>
                                                              <System.Text;></System.Text>
                                                              <using>
                                                                <System.Threading.Tasks;></System.Threading.Tasks>
                                                                <using>
                                                                  <System.Windows;></System.Windows>
                                                                  <using>
                                                                    <System.Windows.Controls;></System.Windows.Controls>
                                                                    <using>
                                                                      <System.Windows.Data;></System.Windows.Data>
                                                                      <using>
                                                                        <System.Windows.Documents;></System.Windows.Documents>
                                                                        <using>
                                                                          <System.Windows.Input;></System.Windows.Input>
                                                                          <using>
                                                                            <System.Windows.Media;></System.Windows.Media>
                                                                            <using>
                                                                              <System.Windows.Media.Imaging;></System.Windows.Media.Imaging>
                                                                              <using>
                                                                                <System.Windows.Navigation;></System.Windows.Navigation>
                                                                                <using>
                                                                                  <System.Windows.Shapes;></System.Windows.Shapes>

                                                                                  <namespace>
                                                                                    <WpfApp1>
                                                                                      {
                                                                                      /// <summary>
                                                                                        /// <Interaction logic="" for="" MainWindow.xaml="">https://abwonline.ca</Interaction>
                                                                                        ///
                                                                                      </summary>
                                                                                      <public>
                                                                                        "<public_html>
                                                                                          "'<root>'
  
  </public_html>
                                                                                      </public>
                                                                                      <partial></partial>
                                                                                      <class></class>
                                                                                      <MainWindow></MainWindow> :
                                                                                      <Window></Window>
                                                                                      {
                                                                                      <public MainWindow="https://abwonlin.abwonline.ca"(https://abwonline.ca)>
                                                                                        {
                                                                                        <InitializeComponent(https://abwonlin.abwonline.ca)>
                                                                                          ;
                                                                                          }
                                                                                          }
                                                                                          }
                                                                                          <html>
                                                                                            [% <include table=""></include> %]
                                                                                            [% <Block table="">
                                                                                              %]
                                                                                              [% <title>https://table.abwonline.ca</title> %
                                                                                              </table>
                                                                                              <connect>
                                                                                                <https: xmlns:https=""/<{http://abwonline.ca}>
                                                                                                <{:}>
                                                                                                {http://mail.template-toolkit.org/mailman/listinfo/templates}
                                                                                                {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                                                                {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                                                                <mail>
                                                                                                  <title>
                                                                                                    [% <e-mail cloud=""></e-mail> %]
                                                                                                  </title>
                                                                                                  </Html>
                                                                                                </mail>
                                                                                                <redirect>
                                                                                                  <mail>
                                                                                                    <:><redirect>
                                                                                                      {https://mail.abwonline.ca}>
                                                                                                      <:> <redirect:>
                                                                                                        <ftps://"mail.abwonline.ca">
                                                                                                        <:><inbox>
                                                                                                          <ftps.inbox.abwonline.ca>
                                                                                                            <:><ftps: xmlns:ftps="inbox"/
                                                                                                            </mail.abwonline.ca.inbox>
                                                                                                            <ftps.inbox.abwonline.ca>
                                                                                                              <? xml version="1.0" encoding="utf-8"?>
                    <using></using> <System;></System>'using <System.Collections.Generic;></System.Collections.Generic>
                                                                                                              <using>
                                                                                                                <System.Linq;>
                                                                                                                  <using>
                                                                                                                    <System.Text;></System.Text>
                                                                                                                    <using>
                                                                                                                      <System.Threading.Tasks;></System.Threading.Tasks>
                                                                                                                      <using>
                                                                                                                        <System.Windows;></System.Windows>
                                                                                                                        <using>
                                                                                                                          <System.Windows.Controls;></System.Windows.Controls>
                                                                                                                          <using>
                                                                                                                            <System.Windows.Data;></System.Windows.Data>
                                                                                                                            <using>
                                                                                                                              <System.Windows.Documents;></System.Windows.Documents>
                                                                                                                              <using>
                                                                                                                                <System.Windows.Input;></System.Windows.Input>
                                                                                                                                <using>
                                                                                                                                  <System.Windows.Media;></System.Windows.Media>
                                                                                                                                  <using>
                                                                                                                                    <System.Windows.Media.Imaging;></System.Windows.Media.Imaging>
                                                                                                                                    <using>
                                                                                                                                      <System.Windows.Navigation;></System.Windows.Navigation>
                                                                                                                                      <using>
                                                                                                                                        <System.Windows.Shapes;></System.Windows.Shapes>

                                                                                                                                        <namespace>
                                                                                                                                          <WpfApp1>
                                                                                                                                            {
                                                                                                                                            /// <summary>
                                                                                                                                              /// Interaction logic for MainWindow.xaml
                                                                                                                                              ///
                                                                                                                                            </summary>
                                                                                                                                            <public>
                                                                                                                                              "<public_html>
                                                                                                                                                "'<root>'
  
  </public_html>"
                                                                                                                                            </public>
                                                                                                                                            <partial></partial>
                                                                                                                                            <class></class>
                                                                                                                                            <MainWindow></MainWindow> :
                                                                                                                                            <Window></Window>
                                                                                                                                            {
                                                                                                                                            <public MainWindow=""()>
                                                                                                                                              {
                                                                                                                                              <InitializeComponent()>
                                                                                                                                                ;
                                                                                                                                                }
                                                                                                                                                }
                                                                                                                                                }

                                                                                                                                                <html>
                                                                                                                                                  [% <include table=""></include> %]
                                                                                                                                                  [% <Block table="">
                                                                                                                                                    %]

                                                                                                                                                    [% <title></title> %

                                                                                                                                                    </table>
                                                                                                                                                    <connect>
                                                                                                                                                      <https: xmlns:https=""/<{http://abwonline.ca}>
                                                                                                                                                      <{:}>
                                                                                                                                                      {http://mail.template-toolkit.org/mailman/listinfo/templates}
                                                                                                                                                      {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                                                                                                                      {http://mail.template-toolkit.org/mailman/listinfo/templates-announce/}
                                                                                                                                                      <mail>
                                                                                                                                                        <title>
                                                                                                                                                          [% <e-mail cloud=""></e-mail> %]
                                                                                                                                                        </title>
                                                                                                                                                        </Html>
                                                                                                                                                      </mail>
                                                                                                                                                      <redirect>
                                                                                                                                                        <mail>
                                                                                                                                                          <:><redirect>
                                                                                                                                                            {https://mail.abwonline.ca}>
                                                                                                                                                            <:> <redirect:>
                                                                                                                                                              <ftps://"mail.abwonline.ca">
                                                                                                                                                              <:><inbox>
                                                                                                                                                                <ftps.inbox.abwonline.ca>
                                                                                                                                                                  <:><ftps: xmlns:ftps="inbox"/
                                                                                                                                                                  </mail.abwonline.ca.inbox>
                                                                                                                                                                  <ftps.inbox.abwonline.ca>
                </inbox><redirect>
                                                                                                                                                                [</ftps://["<user namespace=""></user>"<:>{'<username></username>'}]<.abwonline.ca>
                                                                                                                                                                  "<.inbox>
                                                                                                                                                                    "'<inbox></inbox>'>]
                                                                                                                                                                    <:></ftpsinbox.abwonline.ca>
                                                                                                                                                                  </redirect>
                                                                                                                                                            </connect>
                                                                                                                                                    <?xml version="1.0" encoding="utf-8"?>
                                                                                                                                                    <Project ToolsVersion="15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
                                                                                                                                                      <Import Project="$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
                                                                                                                                                      <PropertyGroup>
                                                                                                                                                        <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
                                                                                                                                                        <Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
                                                                                                                                                        <ProjectGuid>{A382D358-4D91-4DA7-A540-EBE717AD2753}</ProjectGuid>
                                                                                                                                                        <OutputType>Exe</OutputType>
                                                                                                                                                        <RootNamespace>ConsoleApp2</RootNamespace>
                                                                                                                                                        <AssemblyName>ConsoleApp2</AssemblyName>
                                                                                                                                                        <TargetFrameworkVersion>v4.6.1</TargetFrameworkVersion>
                                                                                                                                                        <FileAlignment>512</FileAlignment>
                                                                                                                                                        <AutoGenerateBindingRedirects>true</AutoGenerateBindingRedirects>
                                                                                                                                                        <Deterministic>true</Deterministic>
                                                                                                                                                      </PropertyGroup>
                                                                                                                                                      <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' " >
                                                                                                                                                        < PlatformTarget > AnyCPU </ PlatformTarget >
                                                                                                                                                        < DebugSymbols > true </ DebugSymbols >
                                                                                                                                                        < DebugType > full </ DebugType >
                                                                                                                                                        < Optimize > false </ Optimize >
                                                                                                                                                        < OutputPath > bin\Debug\</OutputPath>
                                                                                                                                                        <DefineConstants>DEBUG;TRACE</DefineConstants>
                                                                                                                                                        <ErrorReport>prompt</ErrorReport>
                                                                                                                                                        <WarningLevel>4</WarningLevel>
                                                                                                                                                      </PropertyGroup>
                                                                                                                                                      <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Release|AnyCPU' " >
                                                                                                                                                        < PlatformTarget > AnyCPU </ PlatformTarget >
                                                                                                                                                        < DebugType > pdbonly </ DebugType >
                                                                                                                                                        < Optimize > true </ Optimize >
                                                                                                                                                        < OutputPath > bin\Release\</OutputPath>
                                                                                                                                                        <DefineConstants>TRACE</DefineConstants>
                                                                                                                                                        <ErrorReport>prompt</ErrorReport>
                                                                                                                                                        <WarningLevel>4</WarningLevel>
                                                                                                                                                      </PropertyGroup>
                                                                                                                                                      <ItemGroup>
                                                                                                                                                        <Reference Include = "System" />
                                                                                                                                                        < Reference Include="System.Core" />
                                                                                                                                                        <Reference Include = "System.Xml.Linq" />
                                                                                                                                                        < Reference Include="System.Data.DataSetExtensions" />
                                                                                                                                                        <Reference Include = "Microsoft.CSharp" />
                                                                                                                                                        < Reference Include="System.Data" />
                                                                                                                                                        <Reference Include = "System.Net.Http" />
                                                                                                                                                        < Reference Include="System.Xml" />
                                                                                                                                                      </ItemGroup>
                                                                                                                                                      <ItemGroup>
                                                                                                                                                        <Compile Include = "F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\gem b ox e-mail.cs"OPEN=""/>
                                                                                                                                                        <Compile Include = "F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\AssemblyInfo.cs"OPEN="">
                                                                                                                                                          <Link>Properties\AssemblyInfo.cs</Link>
                                                                                                                                                        </Compile>
                                                                                                                                                      </ItemGroup>
                                                                                                                                                      <ItemGroup>
                                                                                                                                                        <None Include = "App.config" />
                                                                                                                                                        </ ItemGroup >
                                                                                                                                                        < Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" />
                                                                                                                                                    </Project><? xml version="1.0" encoding="UTF-8"?>
                                                          <rows>
                                                                                                                                                      <head>
                                                                                                                                                        <afterInit>
                                                                                                                                                          <call command = "setColumnHidden" >
                                                                                                                                                            < param > 1 </ param >
                                                                                                                                                            < param > true </ param >
                                                                                                                                                            </ call >
                                                                                                                                                            </ afterInit >
                                                                                                                                                            < column width="70" type="dyn" align="right"  sort="str">Sales</column>
                                                                                                                                                            <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
                                                                                                                                                            <column width = "*" type= "ed" align= "left"  sort= "str" >
                                                                                                                                                              Author </ column >

                                                                                                                                                              < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >

                                                                                                                                                              < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                                                            <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                                                              Shipping
                                                                                                                                                              < option value= "1" > 1 </ option >

                                                                                                                                                              < option value= "2" > 2 </ option >

                                                                                                                                                              < option value= "3" > 3 </ option >

                                                                                                                                                              < option value= "4" > 10 </ option >

                                                                                                                                                              < option value= "5" > 20 </ option >

                                                                                                                                                              < option value= "6" > 30 </ option >

                                                                                                                                                              </ column >

                                                                                                                                                              < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >

                                                                                                                                                              < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                                                            <settings>
                                                                                                                                                              <colwidth>px</colwidth>
                                                                                                                                                            </settings>
                                                                                                                                                          </head>
                                                                                                                                                      <row id = "1" >

                                                                                                                                                        < cell > -1500 </ cell >

                                                                                                                                                        < cell > A Time to Kill</cell>
                                                                                                                                                        <cell>John Grisham</cell>
                                                                                                                                                        <cell>12.99</cell>
                                                                                                                                                        <cell>1</cell>
                                                                                                                                                        <cell>24</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>05/01/1998</cell>
                                                                                                                                                      </row>
                                                                                                                                                      <row id = "2" >

                                                                                                                                                        < cell > 1000 </ cell >

                                                                                                                                                        < cell > Blood and Smoke</cell>
                                                                                                                                                        <cell>Stephen King</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>1</cell>
                                                                                                                                                        <cell>24</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>01/01/2000</cell>
                                                                                                                                                      </row>
                                                                                                                                                      <row id = "3" >

                                                                                                                                                        < cell > -200 </ cell >

                                                                                                                                                        < cell > The Rainmaker</cell>
                                                                                                                                                        <cell>John Grisham</cell>
                                                                                                                                                        <cell>7.99</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>48</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>12/01/2001</cell>
                                                                                                                                                      </row>
                                                                                                                                                    </rows>
                                                                                                                                                    <!DOCTYPE html>
                                                                                                                                                    <!--pro-->
                                                                                                                                                    <html>
                                                                                                                                                      <head>
                                                                                                                                                        <title>Run commands from XML</title>
                                                                                                                                                        <meta http-equiv= "Content-Type" content= "text/html; charset=UTF-8" />

                                                                                                                                                        < meta http-equiv= "X-UA-Compatible" content= "IE=edge" />
  
                                                                < link rel= "stylesheet" type= "text/css" href= "../../../codebase/fonts/font_roboto/roboto.css" />
  
                                                                < link rel= "stylesheet" type= "text/css" href= "../../../codebase/dhtmlx.css" />
  
                                                                < script src= "../../../codebase/dhtmlx.js" ></ script >

                                                                                                                                                        < script >
                                                                  function loadGridFromString(){
    myGrid = new dhtmlXGridObject('gridbox');
    myGrid.setDelimiter("|");
    //myGrid.setStyle("text-align:center", "", "", "");
    myGrid.setImagePath("../../../codebase/imgs/");
    myGrid.parse(document.getElementById("gridcont1").value);
}
function loadGridFromString2()
{
    myGrid2 = new dhtmlXGridObject('gridbox2');
    myGrid2.setImagePath("../../../codebase/imgs/");
    myGrid2.parse(document.getElementById("gridcont2").value);
}
                                                              </script>
                                                                                                                                                      </head>
                                                                                                                                                      <body>
                                                                                                                                                        <h1>Run grid methods from XML</h1>
                                                                                                                                                        <p>You are allowed to use methods before grid intialization:</p>
                                                                                                                                                        <div>
                                                                                                                                                          <li>
                                                                                                                                                            Example:  <a href = "javascript:void(0)" onClick="loadGridFromString()">Load grid with web skin</a> set from XML by calling setSkin method before grid initialization
                                                                                                                                                          </li>
                                                                                                                                                        </div>
                                                                                                                                                        <br>
                                                                                                                                                          <div id = "gridbox" style="width:650px; height:165px; background-color:white;"></div>
                                                                                                                                                          The same as with script:<br/>
                                                                                                                                                          <textarea id = "gridcont1" style="width:650px;height:150px;">
                                                                                                                                                            <? xml version="1.0" encoding="UTF-8"?>
                                                                  
                                                                                                                                                            <rows>
                                                                                                                                                              <head>
                                                                                                                                                                <beforeInit>
                                                                                                                                                                  <call command = "setSkin" >
                                                                                                                                                                    < param > material </ param >
                                                                                                                                                                    </ call >
                                                                                                                                                                    < call command="setStyle">
                                                                          <param>text-align:center;</param>
                                                                                                                                                                  </call>
                                                                                                                                                                </beforeInit>
                                                                                                                                                                <column width = "70" type="dyn" align="right"  sort="str">Sales</column>
                                                                                                                                                                <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
                                                                                                                                                                <column width = "100" type= "ed" align= "left"  sort= "str" >
                                                                                                                                                                  Author </ column >
                                                                                                                                                                  < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
                                                                                                                                                                  < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                                                                <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                                                                  Shipping
                                                                                                                                                                  < option value= "1" > 1 </ option >
                                                                                                                                                                  < option value= "2" > 2 </ option >
                                                                                                                                                                  < option value= "3" > 3 </ option >
                                                                                                                                                                  < option value= "4" > 10 </ option >
                                                                                                                                                                  < option value= "5" > 20 </ option >
                                                                                                                                                                  < option value= "6" > 30 </ option >
                                                                                                                                                                  </ column >
                                                                                                                                                                  < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
                                                                                                                                                                  < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                                                                <settings>
                                                                                                                                                                  <colwidth>px</colwidth>
                                                                                                                                                                </settings>
                                                                                                                                                              </head>
                                                                                                                                                              <row id = "1" >
                                                                                                                                                                < cell > -1500 </ cell >
                                                                                                                                                                < cell > A Time to Kill</cell>
                                                                                                                                                                <cell>John Grisham</cell>
                                                                                                                                                                <cell>12.99</cell>
                                                                                                                                                                <cell>1</cell>
                                                                                                                                                                <cell>24</cell>
                                                                                                                                                                <cell>0</cell>
                                                                                                                                                                <cell>05/01/1998</cell>
                                                                                                                                                              </row>
                                                                                                                                                              <row id = "2" >
                                                                                                                                                                < cell > 1000 </ cell >
                                                                                                                                                                < cell > Blood and Smoke</cell>
                                                                                                                                                                <cell>Stephen King</cell>
                                                                                                                                                                <cell>0</cell>
                                                                                                                                                                <cell>1</cell>
                                                                                                                                                                <cell>24</cell>
                                                                                                                                                                <cell>0</cell>
                                                                                                                                                                <cell>01/01/2000</cell>
                                                                                                                                                              </row>
                                                                                                                                                              <row id = "3" >
                                                                                                                                                                < cell > -200 </ cell >
                                                                                                                                                                < cell > The Rainmaker</cell>
                                                                                                                                                                <cell>John Grisham</cell>
                                                                                                                                                                <cell>7.99</cell>
                                                                                                                                                                <cell>0</cell>
                                                                                                                                                                <cell>48</cell>
                                                                                                                                                                <cell>0</cell>
                                                                                                                                                                <cell>12/01/2001</cell>
                                                                                                                                                              </row>
                                                                                                                                                            </rows>
                                                                                                                                                          </textarea>
                                                                                                                                                          <p>Also, you can run methods after grid intialization</p>
                                                                                                                                                          <div>
                                                                                                                                                            <li>
                                                                                                                                                              Example:  <a href = "javascript:void(0)" onClick= "loadGridFromString2()" > Load grid and set the 2nd column hidden</a> by calling setColumnHidden method from xml after grid initialization
                                                                                                                                                            </li>
                                                                                                                                                          </div><br>
                                                                                                                                                            <div id = "gridbox2" style= "width:650px;height:150px;background-color:white;" >
                                                                                                                                                              </ div >
                                                                                                                                                              The same as with script:<br/>
                                                                                                                                                              <textarea id = "gridcont2" style= "width:650px;height:150px;" >
                                                                                                                                                                <? xml version = "1.0" encoding= "UTF-8" ?>
                                                                      < rows >
                                                                        < head >
                                                                          < afterInit >
                                                                            < call command = "setColumnHidden" >
                                                                              < param > 1 </ param >
                                                                                                                                                                < param > true </ param >
                                                                                                                                                                </ call >
                                                                                                                                                                </ afterInit >
                                                                                                                                                                < column width= "70" type= "dyn" align= "right"  sort= "str" > Sales </ column >
                                                                                                                                                                < column width= "150" type= "ed" align= "left"  sort= "str" > Book Title</column>
                                                                                                                                                                <column width = "*" type= "ed" align= "left"  sort= "str" >
                                                                                                                                                                  Author </ column >
                                                                                                                                                                  < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >
                                                                                                                                                                  < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                                                                <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                                                                  Shipping
                                                                                                                                                                  < option value= "1" > 1 </ option >
                                                                                                                                                                  < option value= "2" > 2 </ option >
                                                                                                                                                                  < option value= "3" > 3 </ option >
                                                                                                                                                                  < option value= "4" > 10 </ option >
                                                                                                                                                                  < option value= "5" > 20 </ option >
                                                                                                                                                                  < option value= "6" > 30 </ option >
                                                                                                                                                                  </ column >
                                                                                                                                                                  < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >
                                                                                                                                                                  < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                                                                <settings>
                                                                                                                                                                  <colwidth>px</colwidth>
                                                                                                                                                                </settings>
                                                                                                                                                                </head>
                                                                                                                                                                <row id = "1" >

                                                                                                                                                                  < cell > -1500 </ cell >

                                                                                                                                                                  < cell > A Time to Kill</cell>
                                                                                                                                                                  <cell>John Grisham</cell>
                                                                                                                                                                  <cell>12.99</cell>
                                                                                                                                                                  <cell>1</cell>
                                                                                                                                                                  <cell>24</cell>
                                                                                                                                                                  <cell>0</cell>
                                                                                                                                                                  <cell>05/01/1998</cell>
                                                                                                                                                                </row>
                                                                                                                                                                <row id = "2" >

                                                                                                                                                                  < cell > 1000 </ cell >

                                                                                                                                                                  < cell > Blood and Smoke</cell>
                                                                                                                                                                  <cell>Stephen King</cell>
                                                                                                                                                                  <cell>0</cell>
                                                                                                                                                                  <cell>1</cell>
                                                                                                                                                                  <cell>24</cell>
                                                                                                                                                                  <cell>0</cell>
                                                                                                                                                                  <cell>01/01/2000</cell>
                                                                                                                                                                </row>
                                                                                                                                                                <row id = "3" >

                                                                                                                                                                  < cell > -200 </ cell >

                                                                                                                                                                  < cell > The Rainmaker</cell>
                                                                                                                                                                  <cell>John Grisham</cell>
                                                                                                                                                                  <cell>7.99</cell>
                                                                                                                                                                  <cell>0</cell>
                                                                                                                                                                  <cell>48</cell>
                                                                                                                                                                  <cell>0</cell>
                                                                                                                                                                  <cell>12/01/2001</cell>
                                                                                                                                                                </row>
                                                                                                                                                                </rows>
                                                                                                                                                              </textarea>
                                                                                                                                                            </body>
                                                                                                                                                    </html>
                                                                                                                                                  </inbox><redirect>
                                                                                                          [</ftps://["<user namespace=""></user>"<:>{'<username></username>'}]<.abwonline.ca>
                                                                                                            "<.inbox>
                                                                                                              "'<inbox></inbox>'>]
                                                                                                              <:></ftpsinbox.abwonline.ca>
                                                                                                        </redirect>
                                                                                                        <?xml version="1.0" encoding="utf-8" ?>
                                                                                                        <configuration>
                                                                                                          <startup>
                                                                                                            <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.6.1" />
                                                                                                            {
                                                                                                            "<ExpandedNodes>
                                                                                                              ": [
                                                                                                              <internal class="">
                                                                                                                <PSObject>
    </internal
                                                                                                              {<namespace ConsoleApp1=""></namespace>
                                                                                                              {
                                                                                                              <class Program="">
                                                                                                                {
                                                                                                                <static void=""></static> <https://abwonline.ca>(string[] args)
                                                                                                                {   [% <component.name></component.name> '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
                                                                                                                [% <component.caller>
                                                                                                                  '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
                                                                                                                  [% <component.callers>
                                                                                                                    '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
                                                                                                                    [% <PROCESS></PROCESS> 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
                                                                                                                    [% <PROCESS></PROCESS> '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
                                                                                                                    '<PROCESS>
                                                                                                                      ('<:>'?   >%0<); ("<:>"?  <%1>
                                                                                                                        <=%100>)'
                                                                                                                        }   "<process>
                                                                                                                          :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
                                                                                                                          {<https://node><jason>
                                                                                                                            <namespace[<?1>?/ '   '"  "]#|N/%<arg>!>
    <using System>;
<using> <System.Collections.Generic;>
<using System.Linq;>
<using System.Text;>
<using System.Threading.Tasks;>

<namespace> <ConsoleApp2>
{
    class Program
{{
  "<ExpandedNodes>": [
   internal class PSObject
    {namespace ConsoleApp1
{
    class Program
    {
        static void <https://abwonline.ca>(string[] args)
        {   [% component.name '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
                                                                                                                            [% component.caller '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
                                                                                                                            [% component.callers '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
                                                                                                                            [% PROCESS 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
                                                                                                                            [% PROCESS '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
                                                                                                                            '<PROCESS>
                                                                                                                              ('<:>'?   >%0<); ("<:>"?  <%1>
                                                                                                                                <=%100>)'
                                                                                                                                }   "<process>
                                                                                                                                  :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
                                                                                                                                  }<https://node><jason>                                                                                                                                 <namespace[<?1>?/ '   '"  "]#|N/%<arg>!>
}                             <namespace>   
                          {<table> <install-script>   
                      <Module:>
            <PowerShellGet>
    install script
[-name] <string[]>
[-MinimumVersion<Version>]
[-MaximumVersion<Version>]
[-RequiredVersion<Version>]
[-Repository<string[]>]
[-scope<string[]>]
[-NoPathUpdate]
[-Proxy<Uri>]
[-ProxyCredential<PSCredential>]
[-Credential<PSCredential>]
[-Force]
[-WhatIf]
[-Confirm]
[-CommonParameter<StringComparison[]>]
        <PowerShellCopy>
            <Install-Script>
            -InputObject<PSObject[]>
            [-NoPathUpdate]
            [-Proxy<Uri>]
            [-ProxyCredential<PSCredential>]
            [-Credential<PSCredential>]
            [-Force]
            [-WhatIf]
            [-Confirm]
            [-CommonParameter<StringComparison[]>]
        <$  <PS C:\>Find-Script-Repository("local1"<[https]://"abwonline\home">)-([namespace]"Required-Script2">)
        <$  <C:\>Find-Script-Repository("local1"<[https]://"abwonline\home">)([namespace]"Required-Script2")|<Install-Script>
        <$  <PS C:\>Get-Command-name"Required-Script2"<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">
        <$  <C:\Users\Pattif\Documents\WindowsPowerShell\Scripts\Required-Script2.ps1 PS C:\>Get
            -InstalledScript-namespace"RequiredScript2"[<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">]
            <html>
                [<version>                  :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>':'jason'">
                [<Type>                     :]  <" ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                [<Description>              :]  <"windows 10 version 2.1 version 1 prototype version power punch driver '<node>':'jason'">
                                            <"ALL OPERATING SYSTEMS POWER PUNCH DRIVER NODE SEARCH AND LEASH DEPLOY DATA LOAD"
                                            "TYPE OPEN SOURCE LOAD POWER PUNCH OPEN SOURCE BROWSER DOORWAY TO LEASH DEPLOYMENT" 
                                            "FROM NOT BEING A VIRUS STEALING DEVICE DATA STORAGE IT RESTRAINES THE APP"
                                            "TO BEING A WEBHOSTED APP AND STAYS IN FULL CONNECT AS A WBHOSTED DOORWAY WITH A INNER DEVICE NODE"
                                            "A JASON TO GATHER INTEL IN TABLES TO SEARCH AND CONTROL DEPLOY TO ONE NAME SPACE OR KNOWN AS E-MAIL"
                                            "AS THE MASTER STORAGE SERVER ADDRESS AS A NAME SERVER SAVING THE IP."
                                            "RANDOMIZER AS A LARGE MASSS CONNECT IP RANDOMIZER PER NAME SERVER TO SYNC BLUETOOTH AND ALL WIRELESS DEVICES FLUENTLY"
                                            "TO USE THE DATA APN SUPPLIED TO THE DEVICE TO TURN INTO A BROAD WAVE LENGTH OF CELLULAR AND HIGH SECURITY DIGITAL FREQUENCEY"
                                            "AS ITS ONLY DITITAL SECURE FREQUENCEY RANDOMIZING IP IN SHORT WAVE LENGTH THROUGH BROAD WAVELENGTH TO STAY CONNECTED EVEN WHEN NO DATA"
                                            "MAKING THE FIRST CLOUD STORAGE THAT TURNS SIM CARDS FROM CELLULAR COMPANIES INTO A SAT COM UPLINK DATA CARD WITHOUT THEM KNOWING IT."
                                            "DUE TO THE MASSIVE RECONECT OF A GARUNTEED MATCH FROM THE TROJAN I LAUNCED 2003 TO STEAL DATA REGISTERED DOMAINS AND PASSWORDS AND TO CREAT A SAFE HAVEN"
                                            "FOR DIGITAL BANKING IN MY CLOUD SERVER FOR PURCHASE BUTTONS AND A GARUNTTED CONNECT TO REMOVE DATA RATE INTO ONE UN IP ADDRESS"
                                            "LINE REGISTERED UNDER MY NAME {007.036.068.038} OR {007.036.083.038} THROUGH THE MAILING LIST RETRIEVAL LIKE A VIRUS BUT IN A SECURE SETTING."> 
                [<pattif>                   :]  <
                [<Company Name>             :]  <" ABW ONLINE {OWNER AARON BRADLEY WEST} ">
                [<CopyRight>                :]  <" 2014 ABW ONLINE ALL RIGHTS RESERVED <owner:> 'AARON BRADLEY WEST' ">
                [<Published Date>           :]  <" 2018 OCTOBER 16TH"" 2003 JASON TROJAN"" 1994 TABLES AND CERTIFICATE ENGINE" " 1997 BANKING BRANCH BARRIED IN CEMENT IN AMY BASEMENT ">
                [LicenseUri                 :]  <" :http://required-script3.com/license   ">
                [ProjectUri                 :]  <" :http://required-script3.com   ">
                [IconUri                    :]  <"  :http://-script3/icon)">
                [Tags                       :]  <"  :Tag1://(PowerPunchDriver)Tag2://(StaticVoidSearchNamspceServerSystemScript)Tag-Required-Script"([<<https://"abwonline.ca.(',')("<:>")(drivers.javascript.AaronBradleyWestPowerHousePrograming.PowerPunch)(',')">])[{Tag1, Tag2,Tag-Required-Script3-2.5,PSScript....}]>
                [Includes                   :]  <"  :DataBase, SQL, PhP, Perl, Microsoft Server Center, Visual Studio, Word Press, FTp, E_mail, Install Vault Install Link Randomizer," >
                [PowerShellGetFormatVersion :]  <"  :To be submitted just like the others in 2003">
                [ReleaseNotes               :]  <"  :This software is a very volatile namespace server software and must stay locked up to protect clients identity to sensitive information when running at full programing running filesand must stay running but also must be severly secure to protect identities and is connected to banking so highest security">   
                [Dependencies               :]  <"  :httrequiredps://abwonline.ca {APN} networks by {ABW ONLINE ADMINISTRATION}, AND {SUPPORT} ALL LEAD OFF OF {<main>} {DOMAIN}""also {\home} folder and {root folders} if created in devices a pairing with the {webhosted cloud server}" >
                [RepositorySourceLocation   :]  <"  :http://pattif-dev:8765/api/v2/">
                [Repository                 :]  <"local1"{https://abwonline\home}("https://abwonlin.abwonline.ca ['namespace'{'password[](arg.)'} ")"\home"]") (https://home.abwonline.ca){namespace[](arg)"[password]"}>
                [PackageManagementProvider  :]  <"NuGet">
                [InstalledLocation          :]  <":C:\Program Files\WindowsPowerShell\Scripts">     
        </table>
} "{
  "ExpandedNodes": [
   internal class PSObject
{namespace ConsoleApp1
{
    class Program
    {
        static void <https://abwonline.ca>(string[] args)
        {   [% <component.name> '<https://LanVpnServer.abwonline.ca>' "<https://Lan.Vpn.Server.abwonline.ca'  '"  "?>" %] <('{# "    <:>    " '$|n/%'}' "?")>      # 'outer.tt2'
                                                                                                                                    [% component.caller '<https://abwonline.ca>'"(<https://abwonline.ca' '"  "(value0,<?|1>){<?><:>('</?>')>)}" %] <('{# "    <:>    " '$|n/%'}' "?")>   # undef
                                                                                                                                    [% component.callers '<https://suport.abwonline.ca>'"<https://support.abwonline.ca' '"  "?>" %]  <('{# "    <:>    " '$|%|N'}' "?")>                 # undef
                                                                                                                                    [% PROCESS 'middle.tt2' '<abw://abwonline.ca>' "<https://abwonline.ca'  '"  "?>" %] '<abw://abwonline.ca>' <('{# "    <:>    " '$|n/%'}' "?")>
                                                                                                                                    [% PROCESS '<$ <https://abwonline.ca> >' "<ftp://abwonline.ca>" %] <$ '<ftp://abwonline.ca>'   '?"  ">'<('<$ <# "    <:>    " >'<$|n/%>'>' "?")>
                                                                                                                                    '<PROCESS>
                                                                                                                                      ('<:>'?   >%0<); ("<:>"?  <%1>
                                                                                                                                        <=%100>)'
                                                                                                                                        }   "<process>
                                                                                                                                          :<$ <https://abwonlin.abwonline.ca>'  '"  ">"<%//node>
                                                                                                                                          }<https://node><jason>
                                                                                                                                            <namespace[<?1>?/ '   '"  "]#|N/%<arg>!>"
  ],
  "PreviewInSolutionExplorer": false
}
static void Main(string[] args)
{
    // The code provided will print ‘Hello World’ to the console.
    // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
    Console.WriteLine("Hello World!");
    Console.ReadKey();

    // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
}
}
}
<? xml version="1.0" encoding="utf-8"?>
                                                                                                                                            <html>
                                                                                                                                              <head>
                                                                                                                                                <title>Grid mode</title>
                                                                                                                                                <meta name = "viewport" content= "width=device-width, initial-scale=1.0" >
                                                                                                                                                  < link href= "https://fonts.googleapis.com/css?family=Roboto:400,500" rel= "stylesheet" >

        < script type= "text/javascript" src= "../../codebase/vault.js?v=3.0.0" ></ script >
                                                                                                                                                  < link rel= "stylesheet" type= "text/css" href= "../../codebase/vault.css?v=3.0.0" >

          < script type= "text/javascript" src= "../common/js/index.js?v=3.0.0" ></ script >
                                                                                                                                                  < link rel= "stylesheet" type= "text/css" href= "../common/dhx_samples.css?v=3.0.0" >


            < !--metrics-- >
            < script >
              (function(i, s, o, g, r, a, m){
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function(){
        (i[r].q = i[r].q ||[]).push(arguments)},i[r].l = 1 * new Date(); a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
              })(window, document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-11031269-1', 'auto');
ga('send', 'pageview');
            </script>
                                                                                                                                                  <!-- error tracking -->
                                                                                                                                                  <script src = "https://cdn.ravenjs.com/3.19.1/raven.min.js" crossorigin="anonymous"></script>
                                                                                                                                                  <script>Raven.config('https://a2578da6be394598bfe003e4dbb3a394@sentry.dhtmlx.ru/13').install()</script>
                                                                                                                                                </head>
                                                                                                                                              <body>
                                                                                                                                                <div id = "test" class="container"></div>
                                                                                                                                                <script>
                                                                                                                                                  var vault = new dhx.Vault('test', {
                                                                                                                                                  mode: "grid",
                                                                                                                                                  uploader: {
                                                                                                                                                  target: "/vault/backend/upload"
                                                                                                                                                  }
                                                                                                                                                  });
                                                                                                                                                  vault.data.parse(filesData);

                                                                                                                                                </script>
                                                                                                                                              </body>
                                                                                                                                            </html>
                                                                                                                                            ******************************************************************************************************************************************************************
                                                                                                                                            <? xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion = "15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
                                                                                                                                              <Import Project = "$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
                                                                                                                                              <PropertyGroup>
                                                                                                                                                <Configuration Condition = " '$(Configuration)' == '' " >
                                                                                                                                                  Debug </ Configuration >
                                                                                                                                                  < Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
                                                                                                                                                  <ProjectGuid>{A382D358-4D91-4DA7-A540-EBE717AD2753}</ProjectGuid>
                                                                                                                                                  <OutputType>Exe</OutputType>
                                                                                                                                                  <RootNamespace>ConsoleApp2</RootNamespace>
                                                                                                                                                  <AssemblyName>ConsoleApp2</AssemblyName>
                                                                                                                                                  <TargetFrameworkVersion>v4.6.1</TargetFrameworkVersion>
                                                                                                                                                  <FileAlignment>512</FileAlignment>
                                                                                                                                                  <AutoGenerateBindingRedirects>true</AutoGenerateBindingRedirects>
                                                                                                                                                  <Deterministic>true</Deterministic>
                                                                                                                                                </PropertyGroup>
                                                                                                                                              <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' " >
                                                                                                                                                < PlatformTarget > AnyCPU </ PlatformTarget >
                                                                                                                                                < DebugSymbols > true </ DebugSymbols >
                                                                                                                                                < DebugType > full </ DebugType >
                                                                                                                                                < Optimize > false </ Optimize >
                                                                                                                                                < OutputPath > bin\Debug\</OutputPath>
                                                                                                                                                <DefineConstants>DEBUG;TRACE</DefineConstants>
                                                                                                                                                <ErrorReport>prompt</ErrorReport>
                                                                                                                                                <WarningLevel>4</WarningLevel>
                                                                                                                                              </PropertyGroup>
                                                                                                                                              <PropertyGroup Condition = " '$(Configuration)|$(Platform)' == 'Release|AnyCPU' " >
                                                                                                                                                < PlatformTarget > AnyCPU </ PlatformTarget >
                                                                                                                                                < DebugType > pdbonly </ DebugType >
                                                                                                                                                < Optimize > true </ Optimize >
                                                                                                                                                < OutputPath > bin\Release\</OutputPath>
                                                                                                                                                <DefineConstants>TRACE</DefineConstants>
                                                                                                                                                <ErrorReport>prompt</ErrorReport>
                                                                                                                                                <WarningLevel>4</WarningLevel>
                                                                                                                                              </PropertyGroup>
                                                                                                                                              <ItemGroup>
                                                                                                                                                <Reference Include = "System" />
                                                                                                                                                < Reference Include="System.Core" />
                                                                                                                                                <Reference Include = "System.Xml.Linq" />
                                                                                                                                                < Reference Include="System.Data.DataSetExtensions" />
                                                                                                                                                <Reference Include = "Microsoft.CSharp" />
                                                                                                                                                < Reference Include="System.Data" />
                                                                                                                                                <Reference Include = "System.Net.Http" />
                                                                                                                                                < Reference Include="System.Xml" />
                                                                                                                                              </ItemGroup>
                                                                                                                                              <ItemGroup>
                                                                                                                                                <Compile Include = "F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\gem b ox e-mail.cs"OPEN=""/>
                                                                                                                                                <Compile Include = "F:\sql server projects\abwonline.ca\abwonline.ca\abwonline compileations projects\AssemblyInfo.cs"OPEN="">
                                                                                                                                                  <Link>Properties\AssemblyInfo.cs</Link>
                                                                                                                                                </Compile>
                                                                                                                                              </ItemGroup>
                                                                                                                                              <ItemGroup>
                                                                                                                                                <None Include = "App.config" />
                                                                                                                                                </ ItemGroup >
                                                                                                                                                < Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" />
                                                                                                                                            </Project><? xml version="1.0" encoding="UTF-8"?>
<rows>
                                                                                                                                              <head>
                                                                                                                                                <afterInit>
                                                                                                                                                  <call command = "setColumnHidden" >
                                                                                                                                                    < param > 1 </ param >
                                                                                                                                                    < param > true </ param >
                                                                                                                                                    </ call >
                                                                                                                                                    </ afterInit >
                                                                                                                                                    < column width="70" type="dyn" align="right"  sort="str">Sales</column>
                                                                                                                                                    <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
                                                                                                                                                    <column width = "*" type= "ed" align= "left"  sort= "str" >
                                                                                                                                                      Author </ column >

                                                                                                                                                      < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >

                                                                                                                                                      < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                                                    <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                                                      Shipping
                                                                                                                                                      < option value= "1" > 1 </ option >

                                                                                                                                                      < option value= "2" > 2 </ option >

                                                                                                                                                      < option value= "3" > 3 </ option >

                                                                                                                                                      < option value= "4" > 10 </ option >

                                                                                                                                                      < option value= "5" > 20 </ option >

                                                                                                                                                      < option value= "6" > 30 </ option >

                                                                                                                                                      </ column >

                                                                                                                                                      < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >

                                                                                                                                                      < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                                                    <settings>
                                                                                                                                                      <colwidth>px</colwidth>
                                                                                                                                                    </settings>
                                                                                                                                                  </head>
                                                                                                                                              <row id = "1" >

                                                                                                                                                < cell > -1500 </ cell >

                                                                                                                                                < cell > A Time to Kill</cell>
                                                                                                                                                <cell>John Grisham</cell>
                                                                                                                                                <cell>12.99</cell>
                                                                                                                                                <cell>1</cell>
                                                                                                                                                <cell>24</cell>
                                                                                                                                                <cell>0</cell>
                                                                                                                                                <cell>05/01/1998</cell>
                                                                                                                                              </row>
                                                                                                                                              <row id = "2" >

                                                                                                                                                < cell > 1000 </ cell >

                                                                                                                                                < cell > Blood and Smoke</cell>
                                                                                                                                                <cell>Stephen King</cell>
                                                                                                                                                <cell>0</cell>
                                                                                                                                                <cell>1</cell>
                                                                                                                                                <cell>24</cell>
                                                                                                                                                <cell>0</cell>
                                                                                                                                                <cell>01/01/2000</cell>
                                                                                                                                              </row>
                                                                                                                                              <row id = "3" >

                                                                                                                                                < cell > -200 </ cell >

                                                                                                                                                < cell > The Rainmaker</cell>
                                                                                                                                                <cell>John Grisham</cell>
                                                                                                                                                <cell>7.99</cell>
                                                                                                                                                <cell>0</cell>
                                                                                                                                                <cell>48</cell>
                                                                                                                                                <cell>0</cell>
                                                                                                                                                <cell>12/01/2001</cell>
                                                                                                                                              </row>
                                                                                                                                            </rows>
                                                                                                                                            <!DOCTYPE html>
                                                                                                                                            <!--pro-->
                                                                                                                                            <html>
                                                                                                                                              <head>
                                                                                                                                                <title>Run commands from XML</title>
                                                                                                                                                <meta http-equiv= "Content-Type" content= "text/html; charset=UTF-8" />

                                                                                                                                                < meta http-equiv= "X-UA-Compatible" content= "IE=edge" />
  
      < link rel= "stylesheet" type= "text/css" href= "../../../codebase/fonts/font_roboto/roboto.css" />
  
      < link rel= "stylesheet" type= "text/css" href= "../../../codebase/dhtmlx.css" />
  
      < script src= "../../../codebase/dhtmlx.js" ></ script >

                                                                                                                                                < script >
        function loadGridFromString(){
    myGrid = new dhtmlXGridObject('gridbox');
    myGrid.setDelimiter("|");
    //myGrid.setStyle("text-align:center", "", "", "");
    myGrid.setImagePath("../../../codebase/imgs/");
    myGrid.parse(document.getElementById("gridcont1").value);
}
function loadGridFromString2()
{
    myGrid2 = new dhtmlXGridObject('gridbox2');
    myGrid2.setImagePath("../../../codebase/imgs/");
    myGrid2.parse(document.getElementById("gridcont2").value);
}
    </script>
                                                                                                                                              </head>
                                                                                                                                              <body>
                                                                                                                                                <h1>Run grid methods from XML</h1>
                                                                                                                                                <p>You are allowed to use methods before grid intialization:</p>
                                                                                                                                                <div>
                                                                                                                                                  <li>
                                                                                                                                                    Example:  <a href = "javascript:void(0)" onClick="loadGridFromString()">Load grid with web skin</a> set from XML by calling setSkin method before grid initialization
                                                                                                                                                  </li>
                                                                                                                                                </div>
                                                                                                                                                <br>
                                                                                                                                                  <div id = "gridbox" style="width:650px; height:165px; background-color:white;"></div>
                                                                                                                                                  The same as with script:<br/>
                                                                                                                                                  <textarea id = "gridcont1" style="width:650px;height:150px;">
                                                                                                                                                    <? xml version="1.0" encoding="UTF-8"?>
        
                                                                                                                                                    <rows>
                                                                                                                                                      <head>
                                                                                                                                                        <beforeInit>
                                                                                                                                                          <call command = "setSkin" >
                                                                                                                                                            < param > material </ param >
                                                                                                                                                            </ call >
                                                                                                                                                            < call command="setStyle">
                <param>text-align:center;</param>
                                                                                                                                                          </call>
                                                                                                                                                        </beforeInit>
                                                                                                                                                        <column width = "70" type="dyn" align="right"  sort="str">Sales</column>
                                                                                                                                                        <column width = "150" type="ed" align="left"  sort="str">Book Title</column>
                                                                                                                                                        <column width = "100" type= "ed" align= "left"  sort= "str" >
                                                                                                                                                          Author </ column >

                                                                                                                                                          < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >

                                                                                                                                                          < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                                                        <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                                                          Shipping
                                                                                                                                                          < option value= "1" > 1 </ option >

                                                                                                                                                          < option value= "2" > 2 </ option >

                                                                                                                                                          < option value= "3" > 3 </ option >

                                                                                                                                                          < option value= "4" > 10 </ option >

                                                                                                                                                          < option value= "5" > 20 </ option >

                                                                                                                                                          < option value= "6" > 30 </ option >

                                                                                                                                                          </ column >

                                                                                                                                                          < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >

                                                                                                                                                          < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                                                        <settings>
                                                                                                                                                          <colwidth>px</colwidth>
                                                                                                                                                        </settings>
                                                                                                                                                      </head>
                                                                                                                                                      <row id = "1" >

                                                                                                                                                        < cell > -1500 </ cell >

                                                                                                                                                        < cell > A Time to Kill</cell>
                                                                                                                                                        <cell>John Grisham</cell>
                                                                                                                                                        <cell>12.99</cell>
                                                                                                                                                        <cell>1</cell>
                                                                                                                                                        <cell>24</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>05/01/1998</cell>
                                                                                                                                                      </row>
                                                                                                                                                      <row id = "2" >

                                                                                                                                                        < cell > 1000 </ cell >

                                                                                                                                                        < cell > Blood and Smoke</cell>
                                                                                                                                                        <cell>Stephen King</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>1</cell>
                                                                                                                                                        <cell>24</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>01/01/2000</cell>
                                                                                                                                                      </row>
                                                                                                                                                      <row id = "3" >

                                                                                                                                                        < cell > -200 </ cell >

                                                                                                                                                        < cell > The Rainmaker</cell>
                                                                                                                                                        <cell>John Grisham</cell>
                                                                                                                                                        <cell>7.99</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>48</cell>
                                                                                                                                                        <cell>0</cell>
                                                                                                                                                        <cell>12/01/2001</cell>
                                                                                                                                                      </row>
                                                                                                                                                    </rows>
                                                                                                                                                  </textarea>
                                                                                                                                                  <p>Also, you can run methods after grid intialization</p>
                                                                                                                                                  <div>
                                                                                                                                                    <li>

                                                                                                                                                      Example:  <a href = "javascript:void(0)" onClick= "loadGridFromString2()" > Load grid and set the 2nd column hidden</a> by calling setColumnHidden method from xml after grid initialization
                                                                                                                                                    </li>
                                                                                                                                                  </div><br>
                                                                                                                                                    <div id = "gridbox2" style= "width:650px;height:150px;background-color:white;" >
                                                                                                                                                      </ div >
                                                                                                                                                      The same as with script:<br/>
                                                                                                                                                      <textarea id = "gridcont2" style= "width:650px;height:150px;" >
                                                                                                                                                        <? xml version = "1.0" encoding= "UTF-8" ?>
  
            < rows >
  
              < head >
  
                < afterInit >
  
                  < call command = "setColumnHidden" >
  
                    < param > 1 </ param >

                                                                                                                                                        < param > true </ param >

                                                                                                                                                        </ call >

                                                                                                                                                        </ afterInit >

                                                                                                                                                        < column width= "70" type= "dyn" align= "right"  sort= "str" > Sales </ column >

                                                                                                                                                        < column width= "150" type= "ed" align= "left"  sort= "str" > Book Title</column>
                                                                                                                                                        <column width = "*" type= "ed" align= "left"  sort= "str" >
                                                                                                                                                          Author </ column >

                                                                                                                                                          < column width= "80" type= "price" align= "right" sort= "str" > Price </ column >

                                                                                                                                                          < column width= "80" type= "ch" align= "center" sort= "str" > In Store</column>
                                                                                                                                                        <column width = "80" type= "co" align= "left" sort= "str" >
                                                                                                                                                          Shipping
                                                                                                                                                          < option value= "1" > 1 </ option >

                                                                                                                                                          < option value= "2" > 2 </ option >

                                                                                                                                                          < option value= "3" > 3 </ option >

                                                                                                                                                          < option value= "4" > 10 </ option >

                                                                                                                                                          < option value= "5" > 20 </ option >

                                                                                                                                                          < option value= "6" > 30 </ option >

                                                                                                                                                          </ column >

                                                                                                                                                          < column width= "80" type= "ra" align= "center" sort= "str" > Bestseller </ column >

                                                                                                                                                          < column width= "100" type= "ro" align= "center" sort= "str" > Date of Publication</column>
                                                                                                                                                        <settings>
                                                                                                                                                          <colwidth>px</colwidth>
                                                                                                                                                        </settings>
                                                                                                                                                        </head>
                                                                                                                                                        <row id = "1" >

                                                                                                                                                          < cell > -1500 </ cell >

                                                                                                                                                          < cell > A Time to Kill</cell>
                                                                                                                                                          <cell>John Grisham</cell>
                                                                                                                                                          <cell>12.99</cell>
                                                                                                                                                          <cell>1</cell>
                                                                                                                                                          <cell>24</cell>
                                                                                                                                                          <cell>0</cell>
                                                                                                                                                          <cell>05/01/1998</cell>
                                                                                                                                                        </row>
                                                                                                                                                        <row id = "2" >

                                                                                                                                                          < cell > 1000 </ cell >

                                                                                                                                                          < cell > Blood and Smoke</cell>
                                                                                                                                                          <cell>Stephen King</cell>
                                                                                                                                                          <cell>0</cell>
                                                                                                                                                          <cell>1</cell>
                                                                                                                                                          <cell>24</cell>
                                                                                                                                                          <cell>0</cell>
                                                                                                                                                          <cell>01/01/2000</cell>
                                                                                                                                                        </row>
                                                                                                                                                        <row id = "3" >

                                                                                                                                                          < cell > -200 </ cell >

                                                                                                                                                          < cell > The Rainmaker</cell>
                                                                                                                                                          <cell>John Grisham</cell>
                                                                                                                                                          <cell>7.99</cell>
                                                                                                                                                          <cell>0</cell>
                                                                                                                                                          <cell>48</cell>
                                                                                                                                                          <cell>0</cell>
                                                                                                                                                          <cell>12/01/2001</cell>
                                                                                                                                                          <using System="";>
                                                                                                                                                          </using System;>
                                                                                                                                                          <using System.Collections.Generic="";>
                                                                                                                                                          </using System.Collections.Generic;
                                                                                                                                                          <using System.Linq="";>
                                                                                                                                                          </using System.Linq;>
                                                                                                                                                          <using System.Text="";></using System.Text;>
                                                                                                                                                          <using System.Threading.Tasks="";</using System.Threading.Tasks;>
                                                                                </using>
                                                                                <using System.Windows="";>
                                                                                  <using System.Windows.Controls="";>
                                                                                    <using System.Windows.Data="";>
                                                                                      <using System.Windows.Documents="";>
                                                                                        <using System.Windows.Input="";>
                                                                                          <using System.Windows.Media="";>
                                                                                            <using System.Windows.Media.Imaging="";>
                                                                                              <using System.Windows.Navigation="";>
                                                                                                <using System.Windows.Shapes="";>

                                                                                                  <namespace WpfApp1=""></namespace>
                                                                                                  {
                                                                                                  /// <summary>
                                                                                                    /// <Interaction logic="" for="" MainWindow.xaml=""></Interaction>
                                                                                                    ///
                                                                                                  </summary>
                                                                                                  <public partial="" class="" MainWindow="" :="" Window=""></public>
                                                                                                  {
                                                                                                  <public MainWindow=""()>
                                                                                                    {
                                                                                                    <InitializeComponent(main[]);>
                                        </InitializeComponent>
                                        }
                                        }
                                        }


                                        </row>
                                        </rows>
                                        </textarea>
                                        </body>
                                        </html>

                                        </startup>

                                        </configuration>
                                        </connect>
</xs:schema>

    </script>
  </body>
</html>