export function showLoadingBlock() {
    const reposBlock = document.querySelector('.repos');
    
    const loadingBlock = document.createElement('div');
    loadingBlock.classList.add('loading-block');
    loadingBlock.textContent = 'Идёт запрос. Пожалуйста, подождите';
    
    reposBlock.append(loadingBlock);
}

export function hideLoadingBlock() {
    const loadingBlock = document.querySelector('.loading-block');
    loadingBlock.remove();
}