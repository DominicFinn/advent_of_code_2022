# advent_of_code_2022

## Diary

### Day 1.

I'm a little behind so I am rushing to bang out these answers. I better get my skates on. I quite like the idea of the pointer working it's way over the file. I think I could probably map this down though instead.

I am not keen on converting the object to an array at the end but it seemed convenient so I could sort the array.....

`const first = ordered[ordered.length - 1][1];` I like this the least.

I'd literally just been re-reading Javascript the Good parts on my new Kindle Scribe and had read this:

```
const isNumber = (value) => {
    return typeof value === 'number' && isFinite(value)
}
```

So I lifted it straight from there.
