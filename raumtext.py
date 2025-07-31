f=open('/Users/simonthiefes/Desktop/rooms.csv', encoding='UTF-8')
contents = f.read()

i = 0
page=0

classes = ["course-text", "course", "name", "supervision"]

for line in contents.split('\n'):
    i = 0
    if(page == 0):
        print("<div class=\"page\">")        
    print("<div class=\"card\">")
    for cell in line.split(';'):
        if(i == 1):
            print("<div class=\""+classes[i]+"\">\n"+(cell)+"\n</div>")
        elif(i == 2):
            print("<div class=\""+classes[i]+"\">\n<div>\n")
            print((cell))
        elif(i == 3):
            print("<div class=\""+classes[i]+"\">\n"+cell+"\n</div>")
            print("</div>\n")
            print("</div>\n")
        else:
            print("<div class=\""+classes[i]+"\">\n"+cell+"\n</div>")
        i = i + 1
    print("</div>\n")
    page = page + 1
    if(page == 9):
        print("</div>\n")
        page = 0
print("</div>\n")