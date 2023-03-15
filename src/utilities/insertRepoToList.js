export function insertRepoToList(repo) {
    const list = document.querySelector('.repos__list');
    
    const listItem = document.createElement('li');
    listItem.classList.add('repos__item');
    listItem.classList.add('repo');
    
    const topBlock = document.createElement('div');
    topBlock.classList.add('repo__top-block');
    const middleBlock = document.createElement('div');
    middleBlock.classList.add('repo__middle-block');
    const bottomBlock = document.createElement('div');
    bottomBlock.classList.add('repo__bottom-block');

    const avatar = document.createElement('img');
    avatar.classList.add('repo__avatar');
    avatar.src = repo.owner.avatar_url;
    topBlock.append(avatar);
    
    const owner = document.createElement('div');
    const ownerLink = document.createElement('a');
    ownerLink.target = '_blank';
    owner.classList.add('repo__owner');
    ownerLink.href = repo.owner.url;
    ownerLink.textContent = repo.owner.login
    owner.textContent = "Владелец: ";
    owner.append(ownerLink);
    topBlock.append(owner);

    const name = document.createElement('div');
    const nameLink = document.createElement('a');
    nameLink.target = '_blank';
    name.classList.add('repo__name');
    nameLink.href = repo.url;
    nameLink.textContent = repo.name;
    name.textContent = "Репозиторий: ";
    name.append(nameLink);
    topBlock.append(name);


    const description = document.createElement('div');
    description.classList.add('repo__description');
    if (repo.description === null) {
        const noDescriptionSpan = document.createElement('span');
        noDescriptionSpan.classList.add('repo__description-span');
        noDescriptionSpan.textContent = 'У данного репозитория нет описания :(';
        description.append(noDescriptionSpan);
    } else {
        description.textContent = repo.description;
    }
    middleBlock.append(description);


    const language = document.createElement('div');
    const languageSpan = document.createElement('span');
    languageSpan.classList.add('repo__span');
    languageSpan.textContent = repo.language || '-';
    language.classList.add('repo__language');
    language.textContent = "Основной язык: ";
    language.append(languageSpan);
    bottomBlock.append(language);

    const forks = document.createElement('div');
    const forksSpan = document.createElement('span');
    forksSpan.classList.add('repo__span');
    forksSpan.textContent = repo.forks_count;
    forks.classList.add('repo__forks');
    forks.textContent = "Число форков: ";
    forks.append(forksSpan);
    bottomBlock.append(forks);


    listItem.append(topBlock);
    listItem.append(middleBlock);
    listItem.append(bottomBlock);
    list.append(listItem);
}