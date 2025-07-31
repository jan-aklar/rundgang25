f=open('/Users/simonthiefes/Desktop/test2.csv', encoding='UTF-8')
contents = f.read()

i = 0
page=0

classes = ["title", "name", "course", "supervision"]

for line in contents.split('\n'):
    i = 0
    if(page == 0):
        print("<div class=\"page\">")        
    print("<div class=\"card\">")
    for cell in line.split(';'):
        print("<div class=\""+classes[i]+"\">\n"+(cell)+"\n</div>")
        i = i + 1
    print("</div>\n")
    page = page + 1
    if(page == 9):
        print("</div>\n")
        page = 0