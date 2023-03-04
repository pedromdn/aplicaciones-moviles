const entry_point='https://es.wikipedia.org/w/api.php';
const search_entry_pont='https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=turing';

let search_button= document.getElementById('search');


function search(){
    let search_text= document.getElementById('query').value;
    var res_array=[];
    const entry_point='https://es.wikipedia.org/w/api.php';
    const search_entry_pont=`https://es.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&utf8=&srsearch=${search_text}&prop=images&prop=extracts&exintro&explaintext`;

    console.log(search_entry_pont);
    if(search_text.length>1){

        fetch(search_entry_pont, {
            method: "GET", 
            
          })
            .then((response) => response.json())
            .then((data) => {
                res_array= data.query.search;
                document.getElementById('list').innerHTML=''


            if(res_array.length==0){
                console.log('no results');
                document.getElementById('list').innerHTML+=`<div class="result-card"><h3>Sin resultados</h3><div>icon</div> 
                </div> `
        
            }
            else{
                console.log(res_array);
                document.getElementById('list').innerHTML=''
                  res_array.map((p)=>{
                      document.getElementById('list').innerHTML+=`<div id="${p.pageid}" onclick="getPage(${p.pageid})" class="result-card"><h4 >${p.title}</h4><p >${p.snippet}</p> <a href="http://es.wikipedia.org/?curid=${p.pageid}">Ir a pagina</a>
                      </div> `
                      // document.getElementById('list').innerHTML+=`<div class="result-card">${p.snippet}</div> `
          
              
                  })        
            }
             
              
            })
            .catch((error) => {
              console.error("Error:", error);
              log('error')

            });
            if(search_text=='') document.getElementById('list').innerHTML=''

        
            

    }
    else{
        document.getElementById('list').innerHTML=''


    }


}
function getPage(page){
        let search_text= document.getElementById('query').value;
        var res_array=[];
        document.getElementById('list').innerHTML=''

        const entry_point='https://es.wikipedia.org/w/api.php';
        const search_entry_pont=`https://es.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&pageids=${page}`;
    
        console.log(search_entry_pont);
        if(search_text.length>1){
    
            fetch(search_entry_pont, {
                method: "GET", 
                
              })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    console.log(data.query.pages[page]);
                    document.getElementById('title').innerHTML=data.query.pages[page].title;
                    document.getElementById('content').innerHTML=data.query.pages[page].extract;

                    // document.getElementById('title').innerHTML+=`<div id="${p.pageid}" onclick="getPage(${p.pageid})" class="result-card"><h4 style="margin: 0px;">${p.title}</h4><p style="margin: 0px;">${p.snippet}</p> <a href="http://es.wikipedia.org/?curid=${p.pageid}">Ir a pagina</a>`

             
                 
                  
                })
                .catch((error) => {
                  console.error("Error:", error);
                  log('error')
    
                });
                if(search_text=='') document.getElementById('list').innerHTML=''
    
            
                
    
        }
        else{
            document.getElementById('list').innerHTML=''
    
    
        }
    
    
    
}


// search_button.onclick= print();


