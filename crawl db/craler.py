f= open('Database.txt','r');
g=open('result.txt','w')
while f.readline() :
    s = f.readline()
    if(s.find('"') != -1 and s.find('image') != -1 and s.find('hotel_image') != -1) :
        a=s.split('"');
        print(s);
        a[3] = a[3] + '\n';
        print(a[3]); 
        g.write(a[3]);


f.close();
g.close();
    