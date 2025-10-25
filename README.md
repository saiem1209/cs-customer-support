# React Assignment – Q&A  

## 1. What is JSX, and why is it used?  
**JSX (JavaScript XML)** হলো একটি সিনট্যাক্স এক্সটেনশন যা React এ ব্যবহার করা হয়।  
এটা দেখতে অনেকটা HTML এর মতো, কিন্তু আসলে JavaScript এর মধ্যে লেখা হয়।  

### কেন ব্যবহার করা হয়?  
- JSX এর মাধ্যমে UI কোড লেখা সহজ ও readable হয়।  
- এটি compile হয়ে `React.createElement()` এ রূপান্তরিত হয়।  
- HTML এবং JavaScript কে একসাথে লিখতে সুবিধা হয়।  

---

## 2. What is the difference between State and Props?  

### State  
- Component-এর নিজস্ব data  
- Component-এর ভেতরে তৈরি হয় (using `useState` বা class component এ `this.state`)  
- Changeable (mutable) → `setState` / `setSomething` দিয়ে update করা যায়  

### Props  
- Parent থেকে Child component এ data পাঠানোর জন্য ব্যবহার হয়  
- Read-only (immutable) → Child component এ পরিবর্তন করা যায় না  
- Component reusable করতে সাহায্য করে  

---

## 3. What is the useState hook, and how does it work?  
`useState` হলো React এর একটা Hook যা functional component এ state ব্যবহার করতে দেয়।  
 

#### 4. How can you share state between components in React?

React-এ state share করার প্রধান তিনটি উপায় আছে:

 **ছোট App → Lift State Up**  
   - State কে Parent component এ রাখো  
   - Props ব্যবহার করে child component এ পাঠাও  
   - Child থেকে state update করতে parent-এর function ব্যবহার করো  



##### 5. How is event handling done in React?
--Event নামগুলো camelCase এ লেখা হয় → যেমন onClick, onChange
--Event handler হিসেবে function reference দেওয়া হয়, string নয়
--React এর event গুলো হলো Synthetic Events (browser events এর ওপর wrapper), যাতে cross-browser compatibility থাকে