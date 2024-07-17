function submit(){
    const items = document.getElementsByClassName('data');
    const data = {};
    for (let item of items){
        data [ item.name] = item.value;
    }
    console.log(data);
}