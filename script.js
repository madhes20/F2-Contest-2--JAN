
 let empName = document.querySelector('#name');
 let empProfession = document.querySelector('#profession');
 let empAge = document.querySelector('#age');
 let accDetails = document.querySelector('#accDetails');
 let firstElement = document.querySelector('#firstElement');
 const para = document.createElement("p");




 let count = 1;
 let data = [];

    function validateForm(){
    if(empName.value == "" || empProfession.value == "" || empAge.value == ""){
        document.getElementById('message').style.color="red";
        document.getElementById('message').textContent =
         'Error : Please Make sure All the fields are filled before adding in an employee !';
         return true;
        }
        else{
            document.getElementById('message').style.color="green";
            document.getElementById('message').textContent = 'Success : Employee Added!';
            let obj = {
            id:count,
            name:(empName.value),
            profession:(empProfession.value),
            age:(empAge.value)
         };
         data.push(obj);

         const para1 = document.createElement("table");
         const para2 = document.createElement("tr");
         para1.appendChild(para2);

         const para3 = document.createElement("td");
         para2.appendChild(para3);
         const node1 = document.createTextNode(data[count-1].id);
         para3.appendChild(node1);

         const para4 = document.createElement("td");
         para2.appendChild(para4);
         const node21 = document.createTextNode("Name: ");
         const node22 = document.createTextNode(data[count-1].name);
         para4.appendChild(node21);
         para4.appendChild(node22);

         const para5 = document.createElement("td");
         para2.appendChild(para5);
         const node31 = document.createTextNode("Profession: ");
         const node32 = document.createTextNode(data[count-1].profession);
         para5.appendChild(node31);
         para5.appendChild(node32);

         const para6 = document.createElement("td");
         para2.appendChild(para6);
         const node41 = document.createTextNode("Age: ");
         const node42 = document.createTextNode(data[count-1].age);
         para6.appendChild(node41);
         para6.appendChild(node42);

         const para7 = document.createElement("td");
         para2.appendChild(para7);
         const btn = document.createElement('button');
         btn.innerText="Delete user"
         btn.className = 'btn'+count;
         btn.style.borderRadius="10px";
         para7.appendChild(btn);

         firstElement.classList.add('invisible');
         console.log(accDetails.appendChild(para1));    
         count++;
         return true;
        }
    };


