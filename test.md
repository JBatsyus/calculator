Ссылка на википедию https://github.com/itgirlschool/wiki/wiki/%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82--::first-letter

1. Сколько есть видов условных операторов?

В JS есть 5 видов условных операторов.

1. условный оператор if (с одной ветвью) состоит из:

- ключевого слова if;
- условия (выражения в круглых скобках), которое должно равняться true или false (или быть приведено к одному из этих значений);
- инструкции, которую нужно выполнить, если условие является true или приведено к нему.

2. условный оператор if...else (с двумя ветвями) используется, когда необходимо при истинности условия выполнить одни инструкции, а при ложности - другие.

3. условный оператор else if... (с несколькими ветвями);

4. тернарный оператор (?:): оператор JavaScript, который можно использовать, когда необходимо в зависимости от условия выполнить одно из двух заданных выражений.
   Он состоит из трех операндов, которые разделяются с помощью символов ? и :. Условие тернарного оператора задаётся в первом операнде. Его также можно заключить в скобки. Если условие равно true или будет приведено к этому значению будет выполнено выражение1, иначе - выражение 2.

5. оператор выбора switch : предназначен для выполнения одного варианта инструкций из нескольких в зависимости от значения выражения.

2) Перепишите пример про определение времени суток через тернарный оператор

   let date = new Date();
   let time = date.getHours();

   if (time < 10) {
   alert( "Доброе утро!" );
   } else {
   alert( "Добрый день!" );

   }
   <script>
   let date = new Date();
   let time = date.getHours();

let message = (time < 10) ? "Доброе утро!" :
(time >= 10) ? "Добрый день!" ;

alert( message );
</script>

3. Выведется ли `alert`?

   if ("0") {
   alert( 'Привет' );
   }

Выведется.
Любая строка, кроме пустой, в логическом контексте становится true.

4. Чему будет равно условие (правда или ложь) в этих случаях, если `x = 6` and `y = 3`?

   - (x < 10 && y > 1) _логическое И_ true
   - (x == 5 || y == 5) _логическое ИЛИ_ false
   - !(x == y) _логическое НЕ_ true

5. Назовите три способа назначения обработчиков событий. Какой из них самый универсальный?

   1.Атрибут HTML: onclick="...".
   2.DOM-свойство: elem.onclick = function.
   3.Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.

Самый универсальный - это самый простой обработчик событий, который может быть назначен прямо в разметку HTML ( для него лучше создать отдельную функцию в JS)

6. Корректна ли такая запись? `button.onclick = hello();`
   Не корректна, атрибут должен находиться в двойных кавычаках. Корректный вариант:

function hello() {
alert('Hello');
}
<button onclick="hello();">Hello</button>

7. Какие есть события у клавиатуры?

keydown – при нажатии на клавишу (если клавиша остаётся нажатой, происходит автоповтор);
keyup – при отпускании клавиши.

8. Что такое объект события и какие у него могут быть свойства?

Событие – это сигнал от браузера о том, что что-то произошло. Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

Свойства объекта события:

- bubbles – логическое значение, указывающее на то является ли данное событие всплывающим;
  *cancelable – определяет можно ли событие отменить;
  *cancelBubble – при установке true предотвращает всплытие события, т.е. оно всплывать не будет (является псевдонимом метода *stopPropagation);
  *composed – указывает может ли событие всплывать через из теневого DOM (внутреннего DOM конкретного элемента) в обычный DOM документа;
  *currentTarget – элемент, привязанный к обработчику события;
  *defaultPrevented – показывает был ли для события вызван метод preventDefault;
  *eventPhase – число, указывающее фазу процесса распространения события (0 – не обрабатывается, 1 – погружение, 2 – целевой элемент, 3 – всплытие);
  *isTrusted – указывает вызвано ли событие действием пользователя или программно (посредством использования метода dispatchEvent);
  *returnValue – альтернатива для preventDefault;
  *target – элемент, который создал событие;
  *timestamp – время, когда произошло событие;
  *type – тип (имя) события.

9. Самостоятельно разберитесь, какие бывают операторы сравнения? Напишите сюда как выглядят сравнение "равно", "не равно", "больше чем".

Больше/меньше: a > b, a < b.
Больше/меньше или равно: a >= b, a <= b.
Равно: a == b. (для сравнения используется двойной знак равенства ==. Один знак равенства a = b означает присваивание.)
Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.

https://wm-school.ru/js/js_comparisons.php
