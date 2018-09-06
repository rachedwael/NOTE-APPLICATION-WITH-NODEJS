let fs = require('fs')
let obj={title:"",body:""}
var  _ =require("lodash");
let contenu=""
if (fs.existsSync(('app.json'),()=>{}))
{
contenu = fs.readFileSync('app.json', 'utf8')
}

list=(contenu.length>0?JSON.parse(contenu):[])

let p=process.argv

    if(p[2]==="add")
    {
       if((p[3]==='-t')||(p[3]==="--title"))
        {
            if (p[4]===undefined)
            {
                console.log('Missing required argument: Title') 
                console.log('option :\n --help \n --title -t title of note ')
            }
            else if ((p[4]==="-b")||(p[4]==="--body"))
                    {
                        console.log('Missing required content: Title') 
                        console.log('option :\n --help \n --title -t title of note ')
                    }
                    else if ((p[5]!==undefined)&&((p[5]==="-b")||(p[5]==="--body")))
                                { if (p[6]!==undefined)
                                    {
                                        obj.title=p[4]
                                        obj.body=p[6]
                                        list.push(obj) 
                                        console.log("GOOD INSTRUCTION")
                                        console.log(obj)
                                        console.log(list)
                                    } 
                                    else
                                    {console.log('Missing required Content: Body') 
                                    console.log('option :\n --help \n --body -b body of note ')}
                                }
                                else 
                                {
                                    console.log('Missing required argument: Body') 
                                    console.log('option :\n --help \n --body -b body of note ')
                                }
        }
        else
        {console.log('Missing required argument: Title')
        console.log('option :\n --help \n --title -t Title of note ')
    }
    fs.writeFile('app.json',JSON.stringify(list), function (erreur)
    {
     if (erreur)
     throw erreur; // Vous pouvez gérer les erreurs avant de parser le JSON
    });
    }
    else if(p[2]==="--help")
    {
        console.log('option :\n --title -t title of note \n --body  -b body of note')
    }
    else if (p[2]==="read")
    
    {
        if((p[3]==="--title")||(p[3]==="-t"))
        {   
            let b=false
            if (p[4]!==undefined)
            {list.map(el=>{
            if(p[4]===el.title)
            {console.log("Title: "+ el.title)
            console.log("Body: "+ el.body)
            b=true
            return el
            }
            })
            if (b===false)
            {
                console.log(" Read Not Found")
            }
        }
        else if ((p[3]==="--body")||(p[3]==="-b"))
        {
            let d=false
            if (p[4]!==undefined)
            {list.map(el=>{
            if (p[4]===el.body)
            {console.log("Body:  " + el.body)
             console.log("Title: " + el.title)
             d=true
             return el
            }
            })
            if (d===false)
            {
                console.log(" Read Not Found")
            }
            }}
            else
            {
                console.log('Missing required argument: Body') 
                console.log('option :\n --help \n --body -b body of note ')
            }
        }
        else {
            console.log('Missing required argument: Title of read')
            console.log('option :\n --help \n --title -t Title of note ')
            }
    }
    else if(p[2]==="remove")
    {
        if((p[3]==="--title")||(p[3]==="-t"))
        {   
            
       
            if (p[4]!==undefined)
            { 
                console.log(list.filter(el=>{return p[4]!==el.title}))
                fs.writeFileSync('app.json',JSON.stringify(list.filter(el=>{return p[4]!==el.title})));  
            }
        }
        else if ((p[3]==="--body")||(p[3]==="-b"))
        {
            let d=false
            if (p[4]!==undefined)
            {list.map(el=>{
            if (p[4]===el.body)
            {console.log("Body:  " + el.body)
             console.log("Title: " + el.title)
             d=true
             return el
            }
            })
            if (d===false)
            {
                console.log(" Read Not Found")
            }
            }
            else
            {
                console.log('Missing required argument: Body') 
                console.log('option :\n --help \n --body -b body of note ')
            }
        }
        else {
            console.log('Missing required argument: Title of read')
            console.log('option :\n --help \n --title -t Title of note ')
            }
    }
    else {
        console.log('Not Found')
        console.log('option :\n --help    show help \n --title -t title of note \n --body  -b coprs of note')   
    }
    
   
