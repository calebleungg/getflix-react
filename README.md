### Setup & Installation

*My node version is `v16.14.0`

1. Install dependencies via `npm install`
2. Run the application via `npm start`. App should be available via `localhost:8080`
<br/><br/>

### Chosen Technologies
The app uses `React` with `Webpack` + `Babel` as the Javascript frontend framework and `TailwindCSS` inside `Scss` for a lot of the styling.
<br/><br/>

### Verbose React Is A Habit
Setting up the boilerplate with `React.Context` did take quite a bit time, but for me at least this is how I like to write React for most things.

I've been at companies that don't follow a strict pattern and the spaghetti code that results is very unmaintainable. 

So I try very hard to make sure any React I write is compartmentalised in a way that is hopefully easier to understand, and in a pattern that other developers can work alongside without issue (hopefully).

`React.Context` with `React.Reducers` seemed appropriate for an app this size.
<br/><br/>

### Jest Testing Is A Thing I'd Love To Learn
I have not worked on a code base that has done frontend testing well. This is a thing that I'm looking forward to learning. I thought best to showcase my better areas in this instance.

If I was to implement a jest testing framework, [`react-paypal-js`](https://github.com/paypal/react-paypal-js) seems a likely candidate for a package that does it well, so I would start by using this as a base to reference.
<br/><br/>

### Small Components, No Business Logic
Personally I am quite a fan of smaller components. Although more to move through when reading, if done right it's hopefully easier to understand, maintain, and work on.

I try my best to keep any business logic- ie. api logic, state handling logic, out of the components themselves, with clear semantic names from imported modules doing the explaining.
<br/><br/>

### Design Systems
I'm with the general consensus re design systems in understanding their value. The concepts are fairly similar to React in a sense. Try to re-use common styles, modularise in a way that is maintainable. 

The way I've done it here is a simple implementation, mostly for demonstration. No doubt much more can be expanded on. I guess the tricky bit is making sure developers use the thing.
