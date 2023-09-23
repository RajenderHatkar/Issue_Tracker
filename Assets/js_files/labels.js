// Add this script to handle the custom dropdown
document.addEventListener('DOMContentLoaded', () => {
    const labelsDropdown = document.getElementById('labelsDropdown');
    const selectedLabels = document.getElementById('selectedLabels');
    const dropdownContent = labelsDropdown.querySelector('.dropdown-content');
  
    // Toggle dropdown when clicking on the selected-values div
    selectedLabels.addEventListener('click', () => {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    // Handle option clicks
    dropdownContent.addEventListener('click', (event) => {
      if (event.target.tagName === 'OPTION') {
        event.target.selected = !event.target.selected;
        updateSelectedLabels();
        
        // Close the dropdown when an option is clicked
        dropdownContent.style.display = 'none';
      }
    });
  
    function updateSelectedLabels() {
      const selectedOptions = Array.from(dropdownContent.querySelectorAll('option:checked'))
        .map(option => option.getAttribute('data-value'));
      selectedLabels.textContent = selectedOptions.join(', ');
    }
  });
  