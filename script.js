let openCSQ2 = new Audio('полудостать.mp3');
let openCSQ = new Audio('открытие.mp3');
let openCSQ3 = new Audio('достать.mp3');

openCSQ.preload = 'auto';
openCSQ2.preload = 'auto';
openCSQ3.preload = 'auto';

openCSQ.load();
openCSQ2.load();
openCSQ3.load();

let shwg = new Image();
shwg.src = 'shwg.png';


//загрузки ---------------------------------------------------
let count = 0;
let gameActive = true; // Добавляем флаг для контроля игры
let currentElement = null; // Отслеживаем текущий элемент

function updateCounter() {
    const counter = document.querySelector('.counter');
    if (counter) {
        counter.textContent = `${count}/10`;
    }
}

function elementAdd(container) {
    // Проверяем, активна ли игра и нет ли уже элемента на экране
    if (!gameActive || currentElement) return;
    
    let randX = Math.floor(Math.random() * 70) + 10;
    let randY = Math.floor(Math.random() * 70) + 10;
    
    let ph1 = document.createElement('img');
    ph1.classList = 'ph1';
    ph1.src = 'shwg.png';
    ph1.style.width = '200px';
    ph1.style.height = '300px';
    ph1.style.position = 'absolute';
    ph1.style.left = randX + 'vw';
    ph1.style.top = randY + 'vh';
    ph1.style.cursor = 'pointer';
    ph1.style.zIndex = '10';
    
    container.appendChild(ph1);
    currentElement = ph1;
    
    // Автоматическое удаление и создание нового через 1 секунду (без увеличения счетчика)
    let autoRespawnTimeout = setTimeout(() => {
        if (ph1 && ph1.parentNode && gameActive) {
            ph1.remove();
            currentElement = null;
            console.log('Человек исчез! Появляется новый...');
            setTimeout(() => elementAdd(container), 100); // Небольшая задержка перед новым
        }
    }, 1000);
    
    // Обработчик клика
    ph1.addEventListener('click', () => {
        if (!gameActive) return;
        
        clearTimeout(autoRespawnTimeout); // Отменяем автоматическое удаление
        ph1.remove();
        currentElement = null;
        count++;
        
        console.log('Поймано:', count, '/10');
        updateCounter();
        
        if (count < 10) {
            setTimeout(() => elementAdd(container), 500);
        } else {
            gameActive = false;
            console.log('Игра завершена!');
            // Здесь можно добавить логику завершения игры
            setTimeout(() => {
                document.querySelector('.counter').remove()
            }, 500);
        }
    });
}

// функции вызова -------------------------------------------

let convrertsq = document.querySelector('.convertSQ');
convrertsq.addEventListener('click', () => {
    let opd = document.createElement('div');
    opd.classList.add('op-d');
    document.querySelector('.op').appendChild(opd);
    document.getElementById('csq-top').remove();
    openCSQ.play();
    let umniy = new Audio('Audionautix_-_Atlantis_73712132.mp3');
    umniy.preload = 'auto';
    umniy.load();
    setTimeout(() => {
        convrertsq.style.transition = '1s';
        convrertsq.style.marginTop = '150px';
        let op = document.querySelector('.op');
        op.style.transition = '1s';
        let currentMarginTop = parseFloat(window.getComputedStyle(op).marginTop);
        op.style.marginTop = (currentMarginTop + 150) + 'px';
        let paper = document.querySelector('.paper');
        paper.style.transition = '1s';
        paper.style.marginTop = '-15%';
        openCSQ2.play();
        paper.addEventListener('click', () => {
            openCSQ3.play()
            convrertsq.style.marginTop = '3000px';
            op.style.marginTop = '3000px';
            paper.style.marginTop = 'calc(3vh - 3000px)';
            let pr = document.querySelector('.pr');
            pr.style.opacity = '0';
            setTimeout(() => {
                pr.remove();
                let paperwidth = parseFloat(getComputedStyle(paper).width)
                let paperheight = parseFloat(getComputedStyle(paper).height)
                paper.remove();
                let paper2 = document.createElement('div');
                paper2.classList = 'paper2';
                paperstyles = {
                    backgroundColor: 'rgb(254,248,230)',
                    zIndex: '2',
                    transition: '1s',
                    left: paper.style.left || '0',
                    top: paper.style.top || '0',
                }
                paper2.style.width = paperwidth + 'px';
                paper2.style.height = paperheight + 'px';
                for (let key in paperstyles) {
                    paper2.style[key] = paperstyles[key];
                }
                let main1 = document.querySelector('.main1');
                main1.appendChild(paper2)
                setTimeout(() => {
                    paper2.style.width = '100%';
                    paper2.style.height = '100vh';
                    let curLvl = 0;
                    
                    // тут после завершения анимаций конверта
                    setTimeout(() => {
                        if (curLvl <= 0) {
                            let text = document.createElement('p');
                            text.classList = 'text';
                            text.textContent = 'С днем рождения тебя, Ви) Эту сайт-игру я сделал специально для тебя, а тебе надо пройти 2 испытания, которые будут невероятно сложными (нет). В конце тебя ждет... А что в конце - увидишь сама, когда пройдешь) Удачи в прохождении)';
                            text.style.width = '80%';
                            text.style.fontSize = '20pt';
                            text.style.opacity = '0'
                            text.style.transition = '0.5s';
                            paper2.appendChild(text);
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    text.style.opacity = '1'
                                })
                            })
                            
                            setTimeout(() => {
                                let btn1 = document.createElement('div');
                                btn1.classList = 'btn1';
                                btn1.textContent = 'Начать испытание 1';
                                btn1.style.opacity = '0';
                                paper2.appendChild(btn1);
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        btn1.style.opacity = '1';
                                    })
                                    let btn1 = document.querySelector('.btn1');
                                    btn1.addEventListener('click', () => {
                                        requestAnimationFrame(() => {
                                            requestAnimationFrame(() => {
                                                btn1.style.opacity = '0';
                                                text.style.opacity = '0';
                                            })
                                        })
                                        setTimeout(() => {
                                            btn1.remove();
                                            text.remove();
                                            setTimeout(() => {
                                                curLvl = 1;
                                                console.log('уровень игрока:', curLvl)
                                                if (curLvl == 1) {
                                                    let pravilaDiv1 = document.createElement('div');
                                                    pravilaDiv1.classList = 'pravilaDiv1';
                                                    paper2.appendChild(pravilaDiv1);
                                                    let ttext1 = document.createElement('h2');
                                                    ttext1.classList = 'ttext1'; 
                                                    ttext1.textContent = 'Игра 1: Правила игры'; 
                                                    ttext1.style.transition = '0.5s'
                                                    ttext1.style.opacity = '0';
                                                    let text1 = document.createElement('p');
                                                    text1.classList = 'text1';
                                                    text1.textContent = 'нужно будет словить 10 умных людей в очках'; 
                                                    text1.style.opacity = '0';
                                                    text1.style.transition = '0.5s';
                                                    let muzicmenu = document.createElement('div');
                                                    muzicmenu.classList = 'muzicmenu';
                                                    muzicmenu.style.opacity = '0';
                                                    let MUZMbtn1 = document.createElement('button');
                                                    let MUZMbtn2 = document.createElement('button');
                                                    MUZMbtn1.classList = 'MUZMbtn1';
                                                    MUZMbtn2.classList = 'MUZMbtn2';
                                                    MUZMbtn1.style.opacity = '0';
                                                    MUZMbtn2.style.opacity = '0';
                                                    MUZMbtn1.style.transition = '0.5s';
                                                    MUZMbtn2.style.transition = '0.5s';
                                                    MUZMbtn1.textContent = 'включить музыку';
                                                    MUZMbtn2.textContent = 'выключить музыку';
                                                    let gobtn = document.createElement('div');
                                                    gobtn.classList = 'gobtn';
                                                    gobtn.style.opacity = '0';
                                                    gobtn.style.transition = '0.5s';
                                                    gobtn.transition = '0.5s';
                                                    gobtn.textContent = 'начать игру';
                                                    pravilaDiv1.appendChild(ttext1);
                                                    requestAnimationFrame(() => {
                                                        requestAnimationFrame(() => {
                                                            ttext1.style.opacity = '1';
                                                            ttext1.style.transition = '1s';
                                                            setTimeout(() => {
                                                                ttext1.style.marginTop = '0px';
                                                                setTimeout(() => {
                                                                    pravilaDiv1.appendChild(text1);
                                                                    pravilaDiv1.appendChild(muzicmenu);
                                                                    muzicmenu.appendChild(MUZMbtn1);
                                                                    muzicmenu.appendChild(MUZMbtn2);
                                                                    muzicmenu.appendChild(gobtn);
                                                                    ttext1.style.transition = '0.5s';
                                                                    requestAnimationFrame(() => {
                                                                        requestAnimationFrame(() => {
                                                                            text1.style.opacity = '1';
                                                                            muzicmenu.style.opacity = '1';
                                                                            MUZMbtn1.style.opacity = '0';
                                                                            MUZMbtn2.style.opacity = '0';
                                                                            gobtn.style.opacity = '1';
                                                                        })
                                                                    })
                                                                    gobtn.addEventListener('click', () => {
                                                                        // Сброс игровых переменных
                                                                        count = 0;
                                                                        gameActive = true;
                                                                        currentElement = null;
                                                                        
                                                                        let counter = document.createElement('p');
                                                                        counter.classList = 'counter';
                                                                        counter.style.opacity = '0';
                                                                        counter.style.transition = '0.5s';
                                                                        counter.style.position = 'fixed';
                                                                        counter.style.top = '20px';
                                                                        counter.style.left = '20px';
                                                                        counter.style.fontSize = '24pt';
                                                                        counter.style.zIndex = '15';
                                                                        counter.style.color = 'black';
                                                                        counter.style.backgroundColor = 'rgba(255,255,255,0.8)';
                                                                        counter.style.padding = '10px';
                                                                        counter.style.borderRadius = '10px';
                                                                        counter.textContent = `${count}/10`;
                                                                        
                                                                        requestAnimationFrame(() => {
                                                                            requestAnimationFrame(() => {
                                                                            ttext1.style.opacity = '0';
                                                                            text1.style.opacity = '0';
                                                                            muzicmenu.style.opacity = '0';
                                                                            gobtn.style.opacity = '0';
                                                                            })
                                                                        })
                                                                        setTimeout(() => {
                                                                            pravilaDiv1.remove();
                                                                            paper2.appendChild(counter)
                                                                            counter.style.opacity = '1'
                                                                            // ИСПРАВЛЕНИЕ: Правильное отключение центрирования
                                                                            paper2.style.display = 'block';
                                                                            paper2.style.justifyContent = 'unset';
                                                                            paper2.style.alignItems = 'unset';
                                                                            paper2.style.textAlign = 'left';
                                                                            
                                                                            setTimeout(() => {
                                                                                elementAdd(paper2);
                                                                                let int = setInterval(() => {
                                                                                    if (gameActive == false) {
                                                                                        console.log('успешная проверкка');
                                                                                        clearInterval(int)
                                                                                        let ttext2 = document.createElement('h1');
                                                                                        ttext2.style.position = 'relative';
                                                                                        ttext2.textContent = 'игра 2: викторина';
                                                                                        ttext2.style.opacity = '0';
                                                                                        ttext2.style.transition = '0.5s';
                                                                                        setTimeout(() => {
                                                                                            paper2.appendChild(ttext2);
                                                                                            requestAnimationFrame(() => {
                                                                                                requestAnimationFrame(() => {
                                                                                                    ttext2.style.opacity = '1';
                                                                                                    
                                                                                                })
                                                                                            })
                                                                                            let h = parseFloat(getComputedStyle(ttext2).height);
                                                                                            let nh = h/2;
                                                                                            let ph = parseFloat(getComputedStyle(ttext2.parentElement).height);
                                                                                            let okay = (ph * 0.5) - nh;
                                                                                            ttext2.style.marginTop = okay + "px";
                                                                                            setTimeout(() => {
                                                                                                requestAnimationFrame(() => {
                                                                                                    requestAnimationFrame(() => {
                                                                                                        ttext2.style.opacity = '0';
                                                                                                    })
                                                                                                })
                                                                                                setTimeout(() => {
                                                                                                    ttext2.remove()
                                                                                                    // -------------------------
                                                                                                    let vd = document.createElement('div');
                                                                                                    vd.classList = "vd";
                                                                                                    let vq1 = document.createElement('h1');
                                                                                                    vq1.textContent = "Вопрос 1..: скажи мне 3-4 (4!!!) главных слова (выбери только один ответ)";
                                                                                                    let vad01 = document.createElement('div');
                                                                                                    let vad2 = document.createElement('div');
                                                                                                    let vad3 = document.createElement('div');
                                                                                                    let va1 = document.createElement('p');
                                                                                                    let va2 = document.createElement('p');
                                                                                                    let va3 = document.createElement('p');
                                                                                                    let va4 = document.createElement('p');
                                                                                                    vad01.classList = 'vad01';
                                                                                                    vad2.classList = 'vad2';
                                                                                                    vad3.classList = 'vad3';
                                                                                                    va1.id = 'va1';
                                                                                                    va2.id = 'va2';
                                                                                                    va3.id = 'va3';
                                                                                                    va4.id = 'va4';
                                                                                                    va1.classList = 'va';
                                                                                                    va2.classList = 'va';
                                                                                                    va3.classList = 'va';
                                                                                                    va4.classList = 'va';
                                                                                                    vd.style.transition = '0.5s'
                                                                                                    vd.style.opacity = '0'
                                                                                                    // -------------------------
                                                                                                    va1.textContent = 'мир дверь мяч';
                                                                                                    va2.textContent = 'умный человек в очках';
                                                                                                    va3.textContent = 'МУРМУРМЯУ';
                                                                                                    va4.textContent = 'я самая лучшая девочка😈';
                                                                                                    // -------------------------
                                                                                                    paper2.appendChild(vd);
                                                                                                    requestAnimationFrame(() => {
                                                                                                        requestAnimationFrame(() => {
                                                                                                            vd.style.opacity = '1';
                                                                                                        })
                                                                                                    })
                                                                                                    vd.appendChild(vq1);
                                                                                                    vd.appendChild(vad01);
                                                                                                    vad01.appendChild(vad2);
                                                                                                    vad01.appendChild(vad3);
                                                                                                    vad2.appendChild(va1);
                                                                                                    vad2.appendChild(va2);
                                                                                                    vad3.appendChild(va3);
                                                                                                    vad3.appendChild(va4);
                                                                                                    let vlvl = 0
                                                                                                    
                                                                                                    // Первый вопрос - обработчики событий
                                                                                                    va1.addEventListener('click', () => {
                                                                                                        va1.style.color = 'red';
                                                                                                        va2.style.color = 'green';
                                                                                                        va3.style.color = 'red';
                                                                                                        va4.style.color = 'green';
                                                                                                        vq1.textContent = 'неттт( (нажми на правильный)'
                                                                                                    })
                                                                                                    va2.addEventListener('click', () => {
                                                                                                        va1.style.color = 'red';
                                                                                                        va2.style.color = 'green';
                                                                                                        va3.style.color = 'red';
                                                                                                        va4.style.color = 'green';
                                                                                                        vq1.textContent = 'две, зато правды)'
                                                                                                        vlvl++
                                                                                                    })
                                                                                                    va3.addEventListener('click', () => {
                                                                                                        va1.style.color = 'red';
                                                                                                        va2.style.color = 'green';
                                                                                                        va3.style.color = 'red';
                                                                                                        va4.style.color = 'green';
                                                                                                        vq1.textContent = 'мур мур мяу это легенда, но тут 3 слова(( (нажми на правильный)'
                                                                                                    })
                                                                                                    va4.addEventListener('click', () => {
                                                                                                        va1.style.color = 'red';
                                                                                                        va2.style.color = 'green';
                                                                                                        va3.style.color = 'red';
                                                                                                        va4.style.color = 'green';
                                                                                                        vq1.textContent = 'yes babe, its sasalele!!!!!'
                                                                                                        vlvl++
                                                                                                    })
                                                                                                    
                                                                                                    // ИСПРАВЛЕНИЕ: правильное использование setInterval
                                                                                                    let int2 = setInterval(() => {
                                                                                                        if (vlvl >= 1) {
                                                                                                            clearInterval(int2); // ИСПРАВЛЕНО: правильный вызов clearInterval
                                                                                                            let vlvl2 = 0
                                                                                                            setTimeout(() => {
                                                                                                                // Очищаем старые обработчики событий
                                                                                                                va1.replaceWith(va1.cloneNode(true));
                                                                                                                va2.replaceWith(va2.cloneNode(true));
                                                                                                                va3.replaceWith(va3.cloneNode(true));
                                                                                                                va4.replaceWith(va4.cloneNode(true));
                                                                                                                
                                                                                                                // Получаем новые ссылки на элементы
                                                                                                                va1 = document.getElementById('va1');
                                                                                                                va2 = document.getElementById('va2');
                                                                                                                va3 = document.getElementById('va3');
                                                                                                                va4 = document.getElementById('va4');
                                                                                                                
                                                                                                                va1.style.color = 'black';
                                                                                                                va2.style.color = 'black';
                                                                                                                va3.style.color = 'black';
                                                                                                                va4.style.color = 'black';
                                                                                                                vq1.textContent = 'вопрос 2: что такое красота? (только 1 верный)';
                                                                                                                va1.textContent = 'ну это я бошшш';
                                                                                                                va2.textContent = 'хз';
                                                                                                                va3.textContent = '*тут определение типа*';
                                                                                                                va4.textContent = '';
                                                                                                                
                                                                                                                // Новые обработчики для второго вопроса
                                                                                                                va1.addEventListener('click', () => {
                                                                                                                    va1.textContent = 'это я, Ви)';
                                                                                                                    va2.textContent = 'это я, Ви)';
                                                                                                                    va3.textContent = 'это я, Ви)';
                                                                                                                    va4.textContent = 'это я, Ви)';
                                                                                                                    va1.style.color = 'green';
                                                                                                                    va2.style.color = 'green';
                                                                                                                    va3.style.color = 'green';
                                                                                                                    va4.style.color = 'green';
                                                                                                                    vq1.textContent = 'правильно))';
                                                                                                                    vlvl2++
                                                                                                                })
                                                                                                                va2.addEventListener('click', () => {
                                                                                                                    va1.textContent = 'это я, Ви)';
                                                                                                                    va2.textContent = 'это я, Ви)';
                                                                                                                    va3.textContent = 'это я, Ви)';
                                                                                                                    va4.textContent = 'это я, Ви)';
                                                                                                                    va1.style.color = 'green';
                                                                                                                    va2.style.color = 'green';
                                                                                                                    va3.style.color = 'green';
                                                                                                                    va4.style.color = 'green';
                                                                                                                    vq1.textContent = 'от правды не сбежишь)';
                                                                                                                    vlvl2++
                                                                                                                })
                                                                                                                va3.addEventListener('click', () => {
                                                                                                                    va1.textContent = 'это я, Ви)';
                                                                                                                    va2.textContent = 'это я, Ви)';
                                                                                                                    va3.textContent = 'это я, Ви)';
                                                                                                                    va4.textContent = 'это я, Ви)';
                                                                                                                    va1.style.color = 'green';
                                                                                                                    va2.style.color = 'green';
                                                                                                                    va3.style.color = 'green';
                                                                                                                    va4.style.color = 'green';
                                                                                                                    vq1.textContent = 'от правды не сбежишь)';
                                                                                                                    vlvl2++
                                                                                                                })
                                                                                                                // ИСПРАВЛЕНО: убран дублированный обработчик для va3
                                                                                                                va4.addEventListener('click', () => {
                                                                                                                    va1.textContent = 'это я, Ви)';
                                                                                                                    va2.textContent = 'это я, Ви)';
                                                                                                                    va3.textContent = 'это я, Ви)';
                                                                                                                    va4.textContent = 'это я, Ви)';
                                                                                                                    va1.style.color = 'green';
                                                                                                                    va2.style.color = 'green';
                                                                                                                    va3.style.color = 'green';
                                                                                                                    va4.style.color = 'green';
                                                                                                                    vq1.textContent = 'от правды не сбежишь)';
                                                                                                                    vlvl2++
                                                                                                                })
                                                                                                                
                                                                                                                // Проверка завершения второго вопроса
                                                                                                                let int3 = setInterval(() => {
                                                                                                                    if (vlvl2 >= 1) {
                                                                                                                        clearInterval(int3);
                                                                                                                        setTimeout(() => {
                                                                                                                            vd.remove();
                                                                                                                            let finaltext1 = document.createElement('p')
                                                                                                                            finaltext1.textContent = 'привет еще раз) вот и настала самая интересная третья часть)';
                                                                                                                            finaltext1.classList = 'finaltext1';
                                                                                                                            finaltext1.style.transition = '0.5s'
                                                                                                                            setTimeout(() => {
                                                                                                                                requestAnimationFrame(() => {
                                                                                                                                    requestAnimationFrame(() => {
                                                                                                                                        paper2.appendChild(finaltext1)
                                                                                                                                        finaltext1.style.opacity = '1';
                                                                                                                                    })
                                                                                                                                })
                                                                                                                                setTimeout(() => {
                                                                                                                                    requestAnimationFrame(() => {
                                                                                                                                        requestAnimationFrame(() => {
                                                                                                                                            finaltext1.style.opacity = '0';
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                    setTimeout(() => {
                                                                                                                                        finaltext1.textContent = 'пожалуйста, извини меня за то, что игра не такая уж и большая, но я правда старался над ней несколько дней и даже ночей(((';
                                                                                                                                        requestAnimationFrame(() => {
                                                                                                                                            requestAnimationFrame(() => {
                                                                                                                                                finaltext1.style.opacity = '1';
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                        setTimeout(() => {
                                                                                                                                            requestAnimationFrame(() => {
                                                                                                                                                requestAnimationFrame(() => {
                                                                                                                                                    finaltext1.style.opacity = '0';
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                            setTimeout(() => {
                                                                                                                                                finaltext1.style.userSelect = 'text';
                                                                                                                                                finaltext1.textContent = 'в общем вот твой подарок) :    RB8Z4UQRPYSTWQ6Y    <- это промокод на робуксы в роблоксе) чтобы активировать, тебе надо зайти на https://www.roblox.com/gamecards/redeem  потом там зарегестрироваться и нажать все нужные кнопки, ну ты там уже разберешься) еще раз, с днем рождения тебя, Вии <3 ';
                                                                                                                                                requestAnimationFrame(() => {
                                                                                                                                                    requestAnimationFrame(() => {
                                                                                                                                                        finaltext1.style.opacity = '1';
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            }, 1300);
                                                                                                                                        }, 6000);
                                                                                                                                    }, 1300);
                                                                                                                                }, 3500);
                                                                                                                            }, 1700);
                                                                                                                        }, 3000);
                                                                                                                    }
                                                                                                                }, 100);
                                                                                                            }, 1500);
                                                                                                        }
                                                                                                    }, 100);
                                                                                                }, 600);
                                                                                            }, 3000);
                                                                                        }, 1300);
                                                                                    }
                                                                                }, 100);
                                                                            }, 500);
                                                                        }, 600);
                                                                    })
                                                                }, 1000);
                                                            }, 1500);
                                                        })
                                                    })
                                                }   
                                            }, 300);
                                        }, 600);
                                    })
                                })
                            }, 500);
                        }
                    }, 1700);
                    // здесь заканчивается
                }, 1000)
            }, 1050)
        })
    }, 1000);
});