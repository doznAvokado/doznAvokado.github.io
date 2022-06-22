window.onload = function(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let value = params.mobile.toLowerCase(); 
    try{
        document.getElementById(value).checked = true;
    }catch(e){
        console.log(e)
    }
  };