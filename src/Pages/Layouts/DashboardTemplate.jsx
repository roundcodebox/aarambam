import React, { useEffect } from 'react';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import DashboardNav from '../../Components/Dashboard/DashboardNav';

function DashboardTemplate() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-1">
        <div className="col-sm-12 col-lg-12">
          <DashboardHeader />

          <DashboardNav />
          <main>
            <section>
              <h4>Dashboard Template</h4>
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

export default DashboardTemplate;
