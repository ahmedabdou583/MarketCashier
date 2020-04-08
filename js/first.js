var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");

var productsContainer = JSON.parse ( localStorage.getItem("myProducts") ) ;

if(localStorage.getItem("myProducts") !=null)
{
    var productsContainer = JSON.parse ( localStorage.getItem("myProducts") ) ;
    displayProduct();
}
else
{
    productsContainer = [];
}


function addProduct()
{
    var product = 
    {
        name:        productNameInput.value,
        price:       productPriceInput.value,
        category:    productCategoryInput.value,
        description: productDescriptionInput.value
    }
    productsContainer.push(product);
    
    localStorage.setItem("myProducts" , JSON.stringify(productsContainer) );


    displayProduct();
    clearForm();
}

function displayProduct()
{
    var adder = "" ;
    for(var i=0 ; i<productsContainer.length ; i++)
    {
        adder+=
        `<tr>
        <td>`+productsContainer[i].name+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].description+`</td>
        <td>`+`<button onclick="updateProduct(`+i+`)" class="btn btn-warning">Update</button>`+`</td>
        <td>`+`<button onclick="deleteProduct(`+i+`)" class="btn btn-danger">Delete</button>`+`</td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = adder;
}


function clearForm()
{
        productNameInput.value ="";
        productPriceInput.value ="";
        productCategoryInput.value ="";
        productDescriptionInput.value ="";
}


function searchProducts(term)

{

    var rowResults = ``;

    for(var i=0 ; productsContainer.length ; i++)
    {
        if(productsContainer[i].name.includes(term) == true )
        {
            /*
            var charIndex = productsContainer[i].name.indexof(term);
            var termLength = term.length;
            var part1= productsContainer[i].name.substring(0,charIndex);
            var part2= productsContainer[i].name.substring(charIndex,termLength);
            var element = `<p>` + part1 + `<span style="color:red">`+term+`</span>` + term + part2`</p>`;
            rowResults+=  element;
            */

            rowResults += `<p>`+productsContainer[i].name+`</p>`;

            /*`<tr>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td>
            <td>`+productsContainer[i].category+`</td>
            <td>`+productsContainer[i].description+`</td>
            </tr>`
            */
        }

        document.getElementById("rowResults").innerHTML = rowResults ;
    }
}


function deleteProduct(index)
{
   var answer = window.confirm("Are you sure you want to delete site") ;
    if(answer)
    {
        productsContainer.splice(index,1);
        localStorage.setItem("myProducts" , JSON.stringify(productsContainer) );
        displayProduct();
    }
    
}

function updateProduct(index)
{
    window.alert(index);
}



 