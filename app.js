const notifications = document.querySelectorAll('.notification');
const unread = document.querySelectorAll('.unread');
const notificationNumber = document.querySelector('.notification-number');
const notificationBtn = document.querySelector('.notification-btn');

let unreadLength = unread.length;
notificationNumber.textContent = unreadLength;

notifications.forEach((notification)=>{
    notification.addEventListener('click',()=>{
        if(notification.classList.contains('unread')){
            unreadLength--;
            notification.classList.remove('unread');
            notificationNumber.textContent = unreadLength;
        }

    })
})
notificationBtn.addEventListener('click', ()=>{
    notifications.forEach((notification) => notification.classList.remove('unread') );
    notificationNumber.textContent = 0;
})