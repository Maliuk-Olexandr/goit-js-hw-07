
//--------task-1.js--------
const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);
});

//--------style--------

const styleCategories = document.querySelector('#categories');
styleCategories.style.listStyleType = 'none';
styleCategories.style.padding = '24px';
styleCategories.style.width = '440px';
styleCategories.style.display = 'flex';
styleCategories.style.flexDirection = 'column';
styleCategories.style.gap = '24px';
styleCategories.style.margin = '0 auto';

categories.forEach((item) => {
  item.style.backgroundColor = "#f6f6fe";
  item.style.padding = "16px";
});
const styleTitle = document.querySelectorAll('#categories h2');
styleTitle.forEach(title => {
    title.style.fontFamily = "Montserrat, sans-serif";
    title.style.fontSize = '24px';
    title.style.lineHeight = '1.33';
    title.style.letterSpacing = '0.04px';
    title.style.fontWeight = '600';
    title.style.color = "#2e2f42";
    title.style.marginBottom = '8px';
    title.style.margin= '0 0 16px';
});
const styleItemsList = document.querySelectorAll('.item ul');
styleItemsList.forEach(item => {
    item.classList.add("#category-list");
    item.style.listStyleType = 'none';
    item.style.padding = '0';
    item.style.margin = '0';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.gap = '8px';
});
const styleItemsCategory = document.querySelectorAll('.item li');
styleItemsCategory.forEach(item => {
    item.classList.add(".category-item");
    item.style.fontFamily = "Montserrat, sans-serif";
    item.style.fontSize = '16px';
    item.style.lineHeight = '1.5';
    item.style.letterSpacing = '0.04px';
    item.style.fontWeight = '400';
    item.style.color = "#2e2f42";
    item.style.margin = '0';
    item.style.padding = '8px 16px';
    item.style.border = "1px solid #808080";
    item.style.borderRadius = '4px';
});

