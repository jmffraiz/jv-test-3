/**
 * Accordion block - expandable/collapsible sections
 * Content model: each row has a heading (question) and body (answer)
 * @param {Element} block The block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const label = row.children[0];
    const body = row.children[1];

    // Create details/summary for native accordion behavior
    const details = document.createElement('details');
    const summary = document.createElement('summary');

    // Move heading content into summary
    summary.innerHTML = label.innerHTML;
    details.append(summary);

    // Move body content
    if (body) {
      const content = document.createElement('div');
      content.className = 'accordion-item-body';
      content.innerHTML = body.innerHTML;
      details.append(content);
    }

    row.replaceChildren(details);
    row.className = 'accordion-item';
  });
}
