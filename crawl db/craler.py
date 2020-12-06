import requests

def getName(link):
    f= open('Database.txt','w');

    r = requests.get(link)
    r1=r.text
    r2 = r1.encode('utf-8')
    f.write(r2)
    f.close()
    f= open('Database.txt','r');
    g=open('result.txt','a')
    a = 0
    while 1:
        """if(s.find('"') != -1 and s.find('image') != -1 and s.find('hotel_image') != -1) :
            a=s.split('"');
            print(s);
            a[3] = a[3] + '\n';
            print(a[3]); 
            g.write(a[3]);"""
        s=f.readline()
        if(s == ''):
            break;
        if s.find('" data-et-click="   "') != -1:
            s = f.readline()
            s = f.readline()
            g.write(s)

    f.close();
    g.close();
def getLink(link):
    f= open('Database.txt','w');

    r = requests.get(link)
    r1=r.text
    r2 = r1.encode('utf-8')
    f.write(r2)
    f.close()
    f= open('Database.txt','r');
    g=open('linkResult.txt','a')
    a = 0
    while 1:
        s=f.readline()
        if(s == ""):
            break
        if(s.find('"') != -1 and s.find('image') != -1 and s.find('hotel_image') != -1) :
            a=s.split('"');
            print(s);
            a[3] = a[3] + '\n';
            
            g.write(a[3]);
        
        

    f.close();
    g.close();
def getDesc(link):
    f= open('Database.txt','w');

    r = requests.get(link)
    r1=r.text
    r2 = r1.encode('utf-8')
    f.write(r2)
    f.close()
    f= open('Database.txt','r');
    g=open('descResult.txt','a')
    a = 0
    while 1:
        """if(s.find('"') != -1 and s.find('image') != -1 and s.find('hotel_image') != -1) :
            a=s.split('"');
            print(s);
            a[3] = a[3] + '\n';
            print(a[3]); 
            g.write(a[3]);"""
        s=f.readline()
        if(s == ''):
            break;
        if s.find('hotel_desc') != -1:
            s = f.readline()
            g.write(s)

    f.close();
    g.close();
string = "https://www.booking.com/searchresults.vi.html?label=gen173nr-1DCAEoggI46AdIM1gEaPQBiAEBmAEquAEXyAEM2AED6AEBiAIBqAIDuAL-ubL-BcACAdICJDViNjQxYmVkLTAzMWMtNDM1Yy1iZTE3LTIyMjk5MGQwNzVjMdgCBOACAQ&sid=92b7eebc6283f711f50cc99067c391ea&tmpl=searchresults&city=-3723998&class_interval=1&dest_id=-3723998&dest_type=city&dr_ps=IDR&dtdisc=0&from_idr=1&ilp=1&inac=0&index_postcard=0&label_click=undef&postcard=0&room1=A%2CA&sb_price_type=total&shw_aparth=1&slp_r_match=0&srpvid=1b044e5c3a180047&ss_all=0&ssb=empty&sshis=0&top_ufis=1&rows=25&offset="
#i=1
for i in range(30):  
    string1 = string + str(i*25)
    getDesc(string1)
    i=i+1