export function removeNoReposMessage() {
    const noReposBlock = document.querySelector('.no-repos-message');
    if (noReposBlock) {
        noReposBlock.remove();
    }
}