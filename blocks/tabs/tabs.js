/**
 * Tabs block - switchable content panels
 * Content model: rows alternate between tab label and tab content
 * First cell of first row is tab labels, second cell is content for first tab, etc.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const tabList = document.createElement('div');
  tabList.className = 'tabs-list';
  tabList.setAttribute('role', 'tablist');

  const tabPanels = document.createElement('div');
  tabPanels.className = 'tabs-panels';

  [...block.children].forEach((row, i) => {
    const label = row.children[0];
    const content = row.children[1];

    // Create tab button
    const tabId = `tab-${block.dataset.blockName || 'tabs'}-${i}`;
    const panelId = `panel-${block.dataset.blockName || 'tabs'}-${i}`;

    const button = document.createElement('button');
    button.className = 'tabs-tab';
    button.id = tabId;
    button.innerHTML = label.innerHTML;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', panelId);
    button.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    if (i === 0) button.classList.add('tabs-tab-active');
    tabList.append(button);

    // Create tab panel
    const panel = document.createElement('div');
    panel.className = 'tabs-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    if (content) panel.innerHTML = content.innerHTML;
    if (i !== 0) panel.classList.add('tabs-panel-hidden');
    tabPanels.append(panel);
  });

  // Add click handlers
  tabList.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.tabs-tab');
    if (!clickedTab) return;

    // Deactivate all tabs
    tabList.querySelectorAll('.tabs-tab').forEach((tab) => {
      tab.classList.remove('tabs-tab-active');
      tab.setAttribute('aria-selected', 'false');
    });

    // Hide all panels
    tabPanels.querySelectorAll('.tabs-panel').forEach((panel) => {
      panel.classList.add('tabs-panel-hidden');
    });

    // Activate clicked tab
    clickedTab.classList.add('tabs-tab-active');
    clickedTab.setAttribute('aria-selected', 'true');

    // Show corresponding panel
    const panelId2 = clickedTab.getAttribute('aria-controls');
    const panel = tabPanels.querySelector(`#${panelId2}`);
    if (panel) panel.classList.remove('tabs-panel-hidden');
  });

  block.replaceChildren(tabList, tabPanels);
}
