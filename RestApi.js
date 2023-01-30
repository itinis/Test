

async function fetchUserRepository(user) {
    removeDataTable()
  //  document.getElementById("dataTable").style.display="none";    
    const baseUrl = `https://api.github.com/users/${user}/repos`;
    const response = await fetch(baseUrl);
    const repositoryUser = await response.json();
     var ul = document.querySelector("ul");
    var tbody = $('#table_body');
    
    repositoryUser.forEach(element => {
        $('<tr>').append(
            $('<td>').text(element.id),
            $('<td>').text(element.full_name),
            $('<td>').text(element.html_url),
            $('<td>').text(element.visibility)
            ).appendTo(tbody);
        document.getElementById("dataTable").style.display="block";    



         var li = document.createElement("li");
         li.className = 'list-group-item';
         li.textContent = element.id + " " + element.full_name + " " + element.html_url + " " + element.visibility;
         ul.appendChild(li);
    })

}
function removeDataTable(){
    var rowId = $("#binding-table >tbody >tr").length;
    if(rowId >0){
    for (let index = rowId-1; index >= 0; index--) {
        $("#binding-table >tbody >tr")[index].remove();
        $("ul li")[index].remove();
    }
}
}


