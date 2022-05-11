import React, { useEffect } from 'react';

import DashboardHeader from './DashboardHeader';
import DashboardNav from './DashboardNav';

function Dashboard() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <div className="container px-4 py-1">
      <div className="row g-5 py-1">
        <div className="col-sm-12 col-lg-12">
          <DashboardHeader />

          <DashboardNav />

          <main>
            <section>
              <h4>Dashboard</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
