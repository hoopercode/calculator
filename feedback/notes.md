# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working Calculator:

    - Yes 100% working calculator with lots of UX features added in as well as different options for the calculator to complete.

2.  Practice using Git / Github Flow:

    - Yes, 2 branches and 19 meaningful commits

3.  Application of what you are learning

- 110%, lots of bits from what we have covered so far.
- You want to keep your main.scss file in your SCSS folder

---

## Specification

1. PSEUDOCODE - done

   - Yes this is great to see, I honestly think it helped you speed up the whole process by taking a granular look at it.
   - The only thing now is to tidy it up, keep the pseudo code in your readme just add it to it's own section.
     - Perhaps it is called "thought process" and you basically say you were working on decomposing a problem.

2. README - done

   - Yes it is done, I think it just needs a couple of features / to be tidied up a little bit.
     - Setup? how do you get it running
     - How do you run your tests?

3. 15 commits - done

4. EVAL? - done

5. CAN'T EXPLAIN IT, YOU CANT USE IT - done

   - All good in terms of your code it is very readable and logical. I think if you had to you would be able to talk through it line by line.

---

## Overall

A solid calculator in terms of functionality and UX / UI. Good going mate, I can see piece of everything we have covered so far which is great. I can see how you broke it down and worked through each problem. Your code is really clean so not much to change at all.

---

## To work on

This is just constructive so you do not have to implement it, its just to tie it up with bows and ribbons.

## Bugs

- / 0 will give you infinity
- You can do multiple .'s -> 5.5.5.5.5
- If you press a number then two different operators it goes strange?
- If you do 5 + 5 = it gives you 10 but if you do afterwards it will give you 15. I think you need to do `operator.pop()` after you do the calculation so you don't end up with lots of operators in your array to check.

```js
// lines 77 - 85
equalsButton.addEventListener("click", () => {
  if (prevDisplay.innerHTML) {
    prevDisplay.innerHTML = `${prevDisplay.innerHTML}${calcDisplay.innerHTML}=`;
    calcDisplay.innerHTML = calculate(sum, calcDisplay.innerHTML.substring(1));
    // This seems to fix it
    operator.pop();
  }
});
```

## House keeping

- Add / finish to readme.md

## Simplify

There is a couple of places that you can simplify it

Your code

```js
// lines 25 - 33
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    numbers.forEach(number => {
      if (number == button.dataset.number) {
        calcDisplay.innerHTML += number;
      }
    });
  });
});
```

Could be

```js
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calcDisplay.innerHTML += button.dataset.number;
  });
});
```

Loops are cool but you shouldn't need one above.
