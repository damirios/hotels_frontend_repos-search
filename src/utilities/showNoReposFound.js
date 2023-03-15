export function showNoReposFound(query, filter) {
    const filtersObj = {
        'all': 'все',
        'name': 'название',
        'description': 'описание',
        'topics': 'топики',
        'readme': 'readme',
    }

    const noReposBlock = document.createElement('div');
    noReposBlock.classList.add('no-repos-message');
    noReposBlock.textContent = `По запросу "${query}" с фильтром "${filtersObj[filter]}" репозиториев не найдено`;

    const reposListBox = document.querySelector('.repos');
    reposListBox.append(noReposBlock);
}