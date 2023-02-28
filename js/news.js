const fetchCategories = ()=> {
    fetch('https://openapi.programming-hero.com/api/news/categories').then(res=>res.json())
    .then(data=>showCategories(data.data));
};

const showCategories= data => {
    // console.log(data.data);
    // capture categories container to append all the category links
    const categoriesContainer = document.getElementById("categories-container");
    data.news_category.forEach(singleCategory => {
        console.log(singleCategory);
        //simple way
        const linkContainer = document.createElement('p');
        linkContainer.innerHTML= `
        <a class="nav-link href="#"onclick="fetchCategoryNews('${singleCategory?.category_id}'),'${singleCategory?.category_name}')">${singleCategory?.category_name}</a>
        `
        categoriesContainer.appendChild(linkContainer);
        // advanced
        // categoriesContainer.innerHTML += `
        // <a class="nav-link href="#">${singleCategory?.category_name}</a>
        // `
    
    });
}
// fetch all news available in a category

const fetchCategoryNews= category_id=>{
     console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/%7Bcategory_id%7D`
}