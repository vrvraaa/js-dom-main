export default () => {
  const tabContainers = document.querySelectorAll('.row');

  tabContainers.forEach((tabList) => {
    const tabs = tabList.querySelectorAll('[role="tab"]');
    const contents = tabList.querySelectorAll('.tab-pane');

    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();

        const activeTab = tabList.querySelector('.active.nav-link');
        const activeContent = tabList.querySelector('.active.tab-pane');
        const targetTab = tabList.querySelector(tab.dataset.bsTarget);

        // remove active class from all tabs and contents
        tabs.forEach((tab) => tab.classList.remove('active'));
        contents.forEach((content) => content.classList.remove('active'));

        // add active class to target tab and content
        targetTab.classList.add('active');
        tab.classList.add('active');

        console.log(`Clicked tab "${tab.innerText}".`);
      });
    });
  });
}; 