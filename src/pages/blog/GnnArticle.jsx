import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import { assetPath } from '../../lib/assets';

function Figure({ src, alt, caption }) {
  return (
    <figure className="my-8">
      <img
        src={assetPath(src)}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl shadow-sm ring-1 ring-gray-200"
      />
      <figcaption className="mt-3 text-center text-sm text-gray-500">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Blog post: Graphs, But Smarter - The Rise of Graph Neural Networks.
 */
export default function GnnArticle() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        image="assets/medium/hero_gnn.webp"
        title="Graphs, But Smarter: The Rise of Graph Neural Networks"
        compact
      >
        <p className="text-sm text-gray-200 mt-3">Published April 24, 2025</p>
      </HeroSection>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white prose prose-indigo prose-lg">
        <h2>Introduction</h2>
        <p>
          Neural networks take inspiration from the human brain: neurons
          connected and communicating to process information. Most deep
          learning models assume data lives on regular grids, like images, or
          ordered sequences, like text. Many real-world systems are different:
          molecules, social networks, transportation routes, meshes, and
          physical simulations are more naturally represented as graphs.
        </p>
        <p>
          Graph Neural Networks extend neural learning to these irregular
          relational structures. Instead of learning only from individual data
          points, GNNs learn from the connections between them, which makes them
          useful for reasoning about complex interactions and structured
          physical systems.
        </p>

        <h2>What is a Graph, Really?</h2>
        <p>
          A graph is a collection of nodes, also called vertices, and edges
          connecting pairs of nodes. We denote it as G=(V,E), where V is the set
          of nodes and E is the set of edges. These edges represent
          relationships between the nodes.
        </p>
        <p>
          Graphs can also be attributed, meaning that nodes and edges carry
          feature vectors. A node might represent an atom, a person, or a point
          in a simulation. An edge might encode a bond, a friendship, a
          distance, or a physical interaction.
        </p>

        <h2>What Makes GNNs Different?</h2>
        <p>
          Traditional neural networks, such as CNNs or RNNs, operate on regular
          domains like grids or sequences. Their success relies on inductive
          biases that match those data formats. Convolutional networks, for
          example, use translation equivariance to recognize image patterns
          regardless of where they appear.
        </p>
        <p>
          Graph data requires a different bias. A graph should not change just
          because we reorder its node labels. This leads to permutation
          invariance for graph-level predictions and permutation equivariance
          for node-level predictions.
        </p>
        <Figure
          src="assets/medium/equivariance.png"
          alt="Permutation equivariance demonstration"
          caption="Permutation equivariance: reordering inputs reorders outputs the same way."
        />

        <h2>How to Choose Your GNN?</h2>
        <p>
          A central question is how expressive a GNN architecture is. In graph
          learning, expressive power means the ability to distinguish different
          graph structures. Message-passing GNNs update each node by aggregating
          information from its neighbors, but not every aggregation function is
          equally informative.
        </p>
        <p>
          Neighborhood aggregation can be seen as a function over a multiset,
          since repeated node features can appear in a neighborhood. For a GNN
          to distinguish different neighborhoods, the aggregation function
          should be injective: different multisets should produce different
          outputs.
        </p>
        <Figure
          src="assets/medium/mean_agg.png"
          alt="Mean pooling example"
          caption="Using mean pooling, two different multisets can collapse to the same value, making the aggregator non-injective."
        />
        <Figure
          src="assets/medium/same_output.png"
          alt="Two neighborhoods with the same output"
          caption="Two different neighborhoods producing the same output under a non-injective aggregation."
        />

        <h2>Okay, Then What is the Best Aggregator?</h2>
        <p>
          A key result from Xu et al. is that sum aggregation can make
          message-passing GNNs maximally expressive over multisets when paired
          with suitable learnable transformations. This insight is the
          foundation of the Graph Isomorphism Network, or GIN.
        </p>
        <Figure
          src="assets/medium/injective_function.png"
          alt="Injective versus non-injective mapping"
          caption="Only injective mappings uniquely identify inputs."
        />
        <p>
          Even expressive message-passing models can have limits, especially
          when graphs require structural or positional awareness. Structure-aware
          GNNs add features such as cycle counts or centralities, while
          position-aware GNNs use distances to anchor nodes or anchor sets.
        </p>
        <Figure
          src="assets/medium/graph_subtrees.png"
          alt="Graph and rooted subtrees"
          caption="A graph and its rooted subtrees illustrating neighborhood structures."
        />
        <Figure
          src="assets/medium/embedding_space.png"
          alt="Embedding space of subtrees"
          caption="Distinct subtrees map to distinct points in latent space."
        />

        <h2>Wrapping Up</h2>
        <p>
          Among message-passing GNNs, sum-based GINs are highly expressive for
          distinguishing neighborhood structures, but model choice still depends
          on the task. GATs can help when edge weighting matters, GCNs remain
          simple and efficient, and richer structural or positional encodings
          can improve performance when topology carries important information.
        </p>

        <h2>References</h2>
        <ul>
          <li>Kipf &amp; Welling (2017) - <em>Semi-Supervised Classification with Graph Convolutional Networks</em>.</li>
          <li>Hamilton et al. (2017) - <em>Inductive Representation Learning on Large Graphs</em>.</li>
          <li>Velickovic et al. (2018) - <em>Graph Attention Networks</em>.</li>
          <li>Xu et al. (2019) - <em>How Powerful Are Graph Neural Networks?</em>.</li>
          <li>You et al. (2021) - <em>Identity-Aware Graph Neural Networks</em>.</li>
          <li>You et al. (2019) - <em>Position-Aware Graph Neural Networks</em>.</li>
          <li>CS224W Lecture Notes - <em>Machine Learning with Graphs</em>.</li>
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link to="/blog" className="text-indigo-600 font-semibold hover:underline">
            Back to Blog
          </Link>
          <a
            href="https://medium.com/@bazziamir/graphs-but-smarter-the-rise-of-graph-neural-networks-ca42ff36ae74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            Read on Medium -&gt;
          </a>
        </div>
      </article>
    </>
  );
}
