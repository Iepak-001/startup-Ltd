## Database 

- Using Pool insted of Client Connections

### Startup

ID primary_key  
Name  
Ofiicial_Mail  
city
pincode
Launch date  
Startup_Stage  

### Founder

ID Primary_key  
First_Name  
Last_Name  
Vision  
Email  
Startups Foriegn key refers startup.ID  

### Investors

ID Primary_key  
Company_name  
Location  
Invested_In FK refers Startup-ID  