import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import BlogEngagement from '../../components/BlogEngagement';
import { assetPath } from '../../lib/assets';

/**
 * Blog post: A small reinforcement learning side project.
 */
export default function SmallRlProject() {
  return (
    <>
      <HeroSection
        image="assets/01_runtime_distribution.png"
        title="A Small Reinforcement Learning Project"
        compact
      >
        <p className="text-sm text-gray-200 mt-3">Published June 9, 2026</p>
      </HeroSection>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-gray-800">
        <p className="text-xl leading-9 mb-8 text-gray-700">
          A small side project where I used a multi-armed bandit idea to think
          about scheduling expensive FORGE simulations while refreshing my
          reinforcement learning intuition.
        </p>

        <h2 className="mt-0 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          A Small Reinforcement Learning Project While Waiting for Simulations
        </h2>
        <p className="text-xl leading-9 mb-6">
          Today I had this thing to do as part of my PhD: launch and monitor a
          large batch of FORGE simulations for the dataset I am building. After
          about 24 hours of continuous runs, I was only around case 120 out of
          400 planned cases, so there was a lot of waiting involved.
        </p>
        <p className="text-xl leading-9 mb-6">
          While the simulations were running, I started looking back at some
          previous work I had done.
        </p>
        <p className="text-xl leading-9 mb-6">
          I realized that there are some topics I worked on before, but because
          I do not use them every day, I slowly start to forget them. One of
          these topics is reinforcement learning. I had learned it before,
          worked with it, and used it in some projects, but I felt that the
          intuition was becoming a bit rusty.
        </p>
        <p className="text-xl leading-9 mb-6">
          So I said to myself: maybe I should keep doing small projects from
          time to time, just to keep these skills alive.
        </p>
        <p className="text-xl leading-9 mb-6">
          And since I had some time, I thought: why not take a small problem
          from what I am currently doing and connect it to reinforcement
          learning?
        </p>
        <p className="text-xl leading-9 mb-6">
          At first, the idea sounded almost like a school exercise. A
          multi-armed bandit problem. Very basic. One of the first things we
          learn in reinforcement learning.
        </p>
        <p className="text-xl leading-9 mb-10">
          The funny part is that this simple problem actually connects quite
          well to what I am doing in my PhD.
        </p>

        <p className="text-xl leading-9 mb-6">
          I am currently generating a dataset using FORGE simulations. Each
          simulation corresponds to a different case, with different parameters
          such as friction, billet geometry, die radius, mesh size, tilt angle,
          final height, and billet angle.
        </p>
        <p className="text-xl leading-9 mb-8">
          The problem is that not all simulations take the same time.
        </p>

        <Figure
          image="assets/01_runtime_distribution.png"
          alt="Runtime distribution of completed FORGE cases"
          caption="Runtime distribution of the completed FORGE cases. Most simulations finish relatively quickly, but a few cases dominate the total computational time."
        />

        <p className="text-xl leading-9 mb-8">
          Some cases finish quickly. Others take much longer. For example, case
          37 finished relatively fast, while cases around 98 and 112 took
          significantly longer because of the deformation complexity and mesh
          behavior.
        </p>

        <Figure
          image="assets/02_runtime_by_billet_angle.png"
          alt="Median runtime grouped by billet angle"
          caption="Median runtime grouped by billet angle. The difference between angles suggests that geometry and contact configuration influence the numerical cost of the simulations."
        />

        <p className="text-xl leading-9 mb-8">
          In my case, the simulations are run without remeshing. So when the
          deformation becomes complex and the mesh does not follow the geometry
          well, the solver can take much more time to converge. This is
          especially visible when the die creates a strong curvature in the
          object. If the deformation is smooth and the die motion corresponds
          well to the geometry, the simulation is easier. But if the contact
          creates too much local curvature, especially with large elements and
          no remeshing, the simulation becomes much more expensive.
        </p>

        <Figure
          image="assets/03_curvature_difficulty_vs_runtime.png"
          alt="Runtime as a function of a curvature and tilt difficulty proxy"
          caption="Runtime as a function of a simple curvature-tilt difficulty proxy. The goal is not to perfectly predict runtime, but to identify cases that may become numerically difficult."
        />

        <p className="text-xl leading-9 mb-6">So the question became:</p>
        <p className="text-2xl leading-9 font-semibold text-gray-900 mb-10">
          Can I use a small reinforcement learning idea to decide which
          simulations should be launched first?
        </p>
        <p className="text-xl leading-9 mb-6">
          Of course, I am not trying to build a big deep reinforcement learning
          system here. The goal is much simpler. I just want a lightweight
          scheduler that helps me choose the next simulations in a smarter way.
        </p>
        <p className="text-xl leading-9 mb-10">
          By scheduler, I simply mean the rule that decides which simulation
          should be launched next. It does not modify the simulation itself; it
          only changes the order in which cases are run.
        </p>

        <h2 className="mt-16 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          The Bandit Idea
        </h2>
        <p className="text-xl leading-9 mb-6">
          The first idea was to use a multi-armed bandit.
        </p>
        <p className="text-xl leading-9 mb-6">
          In a classical multi-armed bandit problem, you have several arms, and
          each arm gives you a reward. You do not know in advance which arm is
          the best, so you need to balance exploration and exploitation.
        </p>
        <p className="text-xl leading-9 mb-6">
          In my case, the arms are not the simulations themselves.
        </p>
        <p className="text-xl leading-9 mb-6">
          Instead, each arm is a strategy for selecting the next simulation.
        </p>

        <pre className="my-8 overflow-x-auto rounded-lg bg-gray-950 p-5 text-sm leading-7 text-gray-100">
          <code>{`Arm 1: choose a random case
Arm 2: choose the case predicted to be the fastest
Arm 3: choose the case with the highest numerical difficulty
Arm 4: choose the most diverse case
Arm 5: choose the case that improves angle balance
Arm 6: choose the best value-per-cost case`}</code>
        </pre>

        <p className="text-xl leading-9 mb-6">
          Each time a worker becomes free, the bandit chooses one of these
          strategies. Then that strategy selects the next FORGE case to run.
        </p>
        <p className="text-xl leading-9 mb-6">
          The reward is computed after the simulation finishes:
        </p>
        <pre className="my-8 overflow-x-auto rounded-lg bg-gray-100 p-5 text-lg text-gray-900">
          <code>reward = dataset_value - runtime_penalty</code>
        </pre>
        <p className="text-xl leading-9 mb-6">
          The idea is not to always choose the fastest simulations. If I only do
          that, I may end up with a dataset full of easy cases.
        </p>
        <p className="text-xl leading-9 mb-6">
          To define the dataset value, I used three simple ideas:
        </p>
        <pre className="my-8 overflow-x-auto rounded-lg bg-gray-100 p-5 text-lg text-gray-900">
          <code>dataset_value = diversity + angle_balance + difficulty</code>
        </pre>
        <p className="text-xl leading-9 mb-6">
          Diversity means that the selected case is different from the cases
          already completed. Angle balance means that the scheduler gives some
          priority to billet angles that are still underrepresented. Difficulty
          means that the case may be physically or numerically interesting, even
          if it is more expensive.
        </p>
        <p className="text-xl leading-9 mb-6">Then the reward becomes:</p>
        <pre className="my-8 overflow-x-auto rounded-lg bg-gray-100 p-5 text-lg text-gray-900">
          <code>reward = dataset_value - lambda * runtime_hours</code>
        </pre>
        <p className="text-xl leading-9 mb-6">
          This captures the trade-off I actually have in practice.
        </p>
        <p className="text-xl leading-9 mb-6">
          A simulation that takes ten minutes but adds nothing new to the
          dataset is not very useful. On the other hand, a simulation that takes
          two hours but explores an important deformation regime might be worth
          it.
        </p>

        <Figure
          image="assets/05_selected_cases_value_vs_runtime.png"
          alt="Selected cases comparing value and runtime"
          caption="Examples of selected cases. The scheduler balances predicted runtime with dataset value, instead of blindly selecting only the fastest simulations."
        />

        <p className="text-xl leading-9 mb-8">
          Before using this idea with new real simulations, I first tested it in
          a predicted-only way. This means that I used predicted runtimes to
          simulate how the bandit would behave. Of course, this is not the real
          final test. The real reward should come from actual runtimes after the
          simulations finish. But it was useful as a dry run to check whether
          the logic made sense.
        </p>

        <Figure
          image="assets/08_predicted_arm_summary.png"
          alt="Predicted-only comparison between scheduling strategies"
          caption="Predicted-only comparison between scheduling strategies. This is only a dry run, but it helps check which strategies look promising before using actual future runtimes."
        />

        <p className="text-xl leading-9 mb-6">
          This is not meant to be a real research work. It was just a small side
          project while waiting for simulations to finish.
        </p>
        <p className="text-xl leading-9 mb-6">
          Still, it was a nice way to refresh the intuition behind multi-armed
          bandits.
        </p>
        <p className="text-xl leading-9 mb-10">
          And after spending a day watching cases slowly progress from 1 to
          around 120, it felt like a reasonable question to ask:
        </p>
        <p className="text-2xl leading-9 font-semibold text-gray-900">
          Which simulation should I run next?
        </p>

        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-block px-5 py-3 text-indigo-600 font-semibold hover:underline"
          >
            Back to Blog
          </Link>
        </div>

        <BlogEngagement postSlug="small-rl-project" />
      </article>
    </>
  );
}

function Figure({ image, alt, caption }) {
  return (
    <figure className="my-10">
      <img
        src={assetPath(image)}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl shadow-sm ring-1 ring-gray-200"
      />
      <figcaption className="mt-4 text-center text-sm leading-6 text-gray-500">
        {caption}
      </figcaption>
    </figure>
  );
}
