# 50 React Hooks Explained

<details>
  <summary>useDebounce</summary>

---

This one is pretty straightforward.

Every time value changes, we set a timeout to update the debounced value after the specified delay.

However, if value keeps changing, we clear the timeout and set a new one.

This means if you keep typing for a whole second without stopping, the debounced value will only be updated once at the end.

```tsx
function useDebounce(value: string, delay: number) {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Handler to set debouncedValue to value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if the value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

</details>

<details>
  <summary>useLocalStorage</summary>

---

Here we start off by getting the value from localStorage, if it exists.

Using a function with the useState hook in React for the initial state is known as "lazy initialization."

This method is handy when setting up the initial state takes a lot of work or relies on outside sources, like local storage. With this approach, React runs the function only once when the component first loads, enhancing performance by skipping extra work on future renders.

When users set a new value, they may pass a function to the setValue function. This is a common pattern in React, where the new state depends on the previous state.

Finally, we store the new value in localStorage.

```tsx
function useLocalStorage<InitialValue>(key: string, initialValue: InitialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: InitialValue | ((value: InitialValue) => InitialValue)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
```

</details>
