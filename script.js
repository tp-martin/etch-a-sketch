 function createFlexGrid(rows, cols) {
        const container = document.getElementById('grid-container');
        container.innerHTML = ''; // Clear existing grid if any

        const itemWidth = 100 / cols; // Calculate percentage width for items
        const itemHeight = 100 / rows; // Calculate percentage height for items

        for (let i = 0; i < rows * cols; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.width = `${itemWidth}%`;
            gridItem.style.height = `${itemHeight}%`;
            // Optional: Add content to the grid item
            // gridItem.textContent = `Item ${i + 1}`;
            container.appendChild(gridItem);
        }
    }

    createFlexGrid(16, 16);