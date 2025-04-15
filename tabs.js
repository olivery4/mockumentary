function toggleTab(tabName) {
    const contents = document.querySelectorAll('.tabContent');
    contents.forEach(content => {
      content.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';
}
