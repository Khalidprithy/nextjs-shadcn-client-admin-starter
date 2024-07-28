export default function Page() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome to Next.js Shadcn Auth.js 5 Template
      </h1>
      <p className="mt-10 rounded-lg border p-5 text-center">
        This template is built using the following technologies:
      </p>
      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-semibold">Next.js</h2>
        <p className="mb-6">
          Next.js is a React framework that enables several extra features,
          including server-side rendering and generating static websites. It is
          fast, flexible, and easy to use, making it a great choice for building
          modern web applications.
        </p>
        <h2 className="mb-6 text-2xl font-semibold">Shadcn</h2>
        <p className="mb-6">
          Shadcn is a design system that provides a set of UI components and
          utilities to help you build responsive and accessible user interfaces
          quickly. It promotes consistency and reusability across your
          application.
        </p>
        <h2 className="mb-6 text-2xl font-semibold">React Hook Form</h2>
        <p className="mb-6">
          React Hook Form is a library that helps you manage form state and
          validation in React applications. It is simple to use, efficient, and
          works seamlessly with other validation libraries like Zod.
        </p>
        <h2 className="mb-6 text-2xl font-semibold">Zod</h2>
        <p className="mb-6">
          Zod is a TypeScript-first schema declaration and validation library.
          It allows you to define schemas for your data and validate it easily,
          ensuring your forms are secure and user inputs are correctly handled.
        </p>
        <h2 className="mb-6 text-2xl font-semibold">Auth.js 5</h2>
        <p className="mb-6">
          Auth.js 5 is a powerful authentication library that provides a
          complete solution for managing user authentication in your
          application. It supports multiple authentication providers and offers
          a flexible and secure way to handle user sessions.
        </p>
      </div>
    </div>
  );
}
