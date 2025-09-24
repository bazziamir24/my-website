import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog post: Graphs, But Smarter – The Rise of Graph Neural Networks.
 *
 * Mirrors the Medium article summary.  For brevity, this component
 * presents key sections and concepts rather than reproducing the entire
 * article verbatim.
 */
export default function GnnArticle() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-24 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/medium/hero_gnn.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Graphs, But Smarter: The Rise of Graph Neural Networks
          </h1>
          <p className="text-sm text-gray-200 mt-3">Published April 24, 2025</p>
        </div>
      </section>
      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white prose prose-indigo prose-lg">
        <h2>Introduction</h2>
        <p>
          Neural networks take inspiration from the human brain: neurons
          connected and communicating to process information. Most deep
          learning models assume data lives on regular grids (images) or
          sequences (text). Yet many real-world systems — molecules, social
          networks, transportation routes — are more naturally represented as
          graphs.  The theory of graphs dates back to Euler's bridges problem
          in 1736 and has become ubiquitous across computer science, biology
          and chemistry.
        </p>
        <p>
          Graph Neural Networks (GNNs), introduced in the late 2000s, extend
          the neural paradigm to these irregular structures.  Instead of
          focusing on individual data points, GNNs learn from the
          <em>connections</em> between them.  This makes them powerful tools for
          simulating physical systems, understanding complex interactions and
          reasoning about structures beyond the reach of traditional networks.
        </p>
        <h2>What is a Graph, Really?</h2>
        <p>
          A graph is a set of nodes (vertices) and edges connecting pairs of
          nodes, noted as \(G=(V,E)\).  Graphs naturally model social
          networks (people connected by friendships) and molecules (atoms
          connected by chemical bonds).  Nodes and edges can carry attributes
          like age or bond type, and there is no fixed ordering — graphs
          vary in size and neighborhood structure.
        </p>
        <p>
          This irregularity breaks assumptions baked into standard neural
          architectures. Convolutions rely on translation equivariance across
          a regular grid; recurrent networks expect sequences.  GNNs embed
          inductive biases appropriate for relational data: permutation
          invariance (reordering node indices doesn't change the graph) and
          permutation equivariance (outputs permute along with inputs for
          node-level predictions).
        </p>
        <h2>What Makes GNNs Different?</h2>
        <p>
          Traditional networks depend on locality in fixed dimensions.  GNNs
          operate on neighborhoods that vary in size and composition.  They
          perform message passing: each node aggregates information from its
          neighbors, updates its representation, and passes messages in
          subsequent layers.  Choosing the right aggregation function matters —
          simple mean pooling cannot distinguish multisets with repeated
          elements.  Injective operations like summation preserve structure and
          underpin architectures like the Graph Isomorphism Network (GIN).
        </p>
        <h2>Choosing the Right GNN</h2>
        <p>
          Different GNNs strike trade-offs between expressiveness and
          efficiency.  Graph Convolutional Networks (GCNs) average neighbor
          features and are easy to train.  Graph Attention Networks (GATs)
          weigh neighbors adaptively, capturing edge importance.  GINs use
          summation for maximal expressive power but may lack positional
          awareness.  Enhancements add structural or positional encodings to
          further distinguish nodes.
        </p>
        <h2>Wrapping Up</h2>
        <p>
          Graph Neural Networks open up new avenues for applying deep
          learning to domains where relationships matter as much as the
          entities themselves.  From molecular property prediction to social
          dynamics and recommendation systems, GNNs are unlocking insights by
          modelling the connectivity of the world.  As the field evolves,
          researchers continue to balance expressive power with scalability
          and to devise architectures tuned to specific tasks.
        </p>
        <h2>References</h2>
        <ul>
          <li>Kipf &amp; Welling (2017) — <em>Semi-Supervised Classification with Graph Convolutional Networks</em>.</li>
          <li>Hamilton et&nbsp;al. (2017) — <em>Inductive Representation Learning on Large Graphs</em>.</li>
          <li>Veličković et&nbsp;al. (2018) — <em>Graph Attention Networks</em>.</li>
          <li>Xu et&nbsp;al. (2019) — <em>How Powerful Are Graph Neural Networks?</em>.</li>
          <li>You et&nbsp;al. (2021) — <em>Identity-Aware Graph Neural Networks</em>.</li>
          <li>You et&nbsp;al. (2019) — <em>Position-Aware Graph Neural Networks</em>.</li>
          <li>CS224W Lecture Notes — <em>Machine Learning with Graphs</em>.</li>
        </ul>
        <div className="mt-10">
          <Link to="/blog" className="text-indigo-600 font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}