/*
DLINK

DES-3028:3#show fdb port 4
Command: show fdb port 4

VID  VLAN Name                        MAC Address       Port Type  
---- -------------------------------- ----------------- ---- ---------------
558  558                              00-1D-09-4B-A1-21  4   DeleteOnTimeout
558  558                              AC-6F-BB-12-FB-E2  4   DeleteOnTimeout

Total Entries  : 2

Alcatel

alcatel-172.19.68.115# show bridge address-table ethernet e24
Aging time is 300 sec

  Vlan        Mac Address       Port     Type    
-------- --------------------- ------ ---------- 
  301      7c:b2:1b:03:02:c2    e24    dynamic   
  301      e8:94:f6:8d:07:4d    e24    dynamic   

alcatel-172.19.68.115# 

ZTE

orl-agg1-acc2-3(cfg)#  show mac dyn port 24
 Total MAC Address     : 2             
 MAC Address Peak value: 40            
 MAC Address Peak time : Fri Oct  5 22:06:11 2018

 Flags: Per - permanent, Stc - static, ToP - to_permanent, ToS - to_static,  
        Sav - auto saved mac address, SrF - source filter, 
        DsF - destination filter, Time - day:hour:min:sec,
        Frm - mac from where:0,LEARN; 1,CONFIG; 2,DUPLICATE; 3,VPN; 4,802.1X;
                             5,LAYER-3; 6,DHCP

  MAC-Address  Vlan-Id   Port    Per Stc ToP ToS Sav SrF DsF Frm      Time
-------------------------------------------------------------------------------
386b.bbf4.bf3e   302   port-24    0   0   0   0  -    0   0   0    01:06:21:25
000e.8f17.d9f3   302   port-24    0   0   0   0  -    0   0   0    01:06:21:27
orl-agg1-acc2-3(cfg)#

*/
