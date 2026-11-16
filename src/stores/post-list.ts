import { defineStore } from 'pinia';
import type { Edition } from '@/static/interfaces';
import { ref } from 'vue';

export const usePostListStore = defineStore('post-to-valid', {
  state: () => ({
    editions: ref<Edition[]>([
      {
        date: new Date(2025, 0, 15),
        posts: [
          {
            title: "Rust s'impose dans la chaîne système Linux",
            subtitle:
              'Comment Rust remplace progressivement le C dans les composants critiques de la distribution.',
            content:
              "La migration de composants fondamentaux de la chaîne système Linux vers Rust s'accélère. Des outils comme systemd, util-linux et e2fsprogs intègrent désormais des modules écrits en Rust, réduisant les vulnérabilités mémoire qui ont longtemps affecté le C. Cette transition, portée par la fondation Linux Foundation, vise à renforcer la sécurité sans sacrifier les performances. Les développeurs bénéficient d'un écosystème croissant de crates système et de guides de contribution dédiés, facilitant l'adoption progressive dans les distributions majeures comme Fedora et Arch Linux.",
            status: null,
          },
          {
            title: 'PostgreSQL 18 introduit le support natif de JSONB 2.0',
            subtitle:
              'Les nouvelles fonctionnalités de manipulation de données semi-structurées changent la donne.',
            content:
              "PostgreSQL 18 apporte une refonte complète de son support JSONB avec l'introduction de schémas typés, d'index GIN optimisés et de fonctions d'agrégation natives. Ces améliorations réduisent significativement les temps de requête sur les colonnes JSON volumineuses, rendant la base plus compétitive face aux solutions NoSQL pour les workloads analytiques. Les administrateurs de bases peuvent désormais définir des contraintes de validité directement dans le schéma, éliminant la nécessité de triggers applicatifs pour garantir l'intégrité des données semi-structurées.",
            status: null,
          },
        ],
      },
      {
        date: new Date(2025, 3, 8),
        posts: [
          {
            title: 'Bun 2.0 : le runtime JavaScript repense la compilation',
            subtitle:
              'Le nouveau compilateur intégré de Bun promet des builds 10 fois plus rapides.',
            content:
              "Avec la sortie de Bun 2.0, le runtime repense fondamentalement son approche de compilation grâce à un pipeline basé sur Zig et un cache incrémental intelligent. Les projets monolithiques profitent de temps de build réduits de manière spectaculaire, tandis que les applications Next.js et Remix voient leur développement local accéléré. L'équipe a également intégré un bundler natif qui remplace esbuild et Rollup pour la plupart des cas d'usage, unifiant l'outillage et réduisant la configuration nécessaire. La compatibilité avec l'écosystème npm reste totale, mais les performances de résolution des dépendances sont désormais deux fois supérieures à celles de pnpm.",
            status: null,
          },
          {
            title: 'Terraform 1.9 simplifie le cycle de vie des modules',
            subtitle:
              "Les nouvelles commandes de test et de vérification statique transforment l'IaC.",
            content:
              "Terraform 1.9 introduit des commandes natives de test unitaire et d'analyse statique, éliminant la dépendance à des outils tiers pour la validation des modules Infrastructure as Code. Les équipes peuvent désormais écrire des tests de plan et d'application directement dans leur dépôt, avec un rapport de couverture intégré. Cette évolution réduit le risque de régression lors des mises à jour de modules partagés et standardise les pratiques de revue de code. Les organisations gérant des centaines de modules internes constatent une diminution notable des incidents de production liés aux changements non testés.",
            status: null,
          },
          {
            title: 'Le Wasm 3.0 arrive sur le web',
            subtitle:
              'Les threads, la garbage collection et les composants natifs transforment le navigateur.',
            content:
              "La spécification WebAssembly 3.0 apporte trois fonctionnalités majeures : les threads partagés, la gestion automatique de la mémoire et le modèle de composants. Ces avancées permettent d'exécuter des applications compilées en Wasm avec des performances proches du natif tout en conservant la sécurité du sandbox. Les moteurs de navigateur intègrent progressivement ces fonctionnalités, ouvrant la voie à des moteurs de jeu, des éditeurs de code et des outils de traitement vidéo directement dans le navigateur sans plugin ni extension.",
            status: null,
          },
        ],
      },
      {
        date: new Date(2025, 6, 22),
        posts: [
          {
            title: 'Deno 2.0 atteint la compatibilité totale Node.js',
            subtitle: 'Le runtime unifié de Deno supprime enfin la frontière entre écosystèmes.',
            content:
              "Deno 2.0 marque un tournant avec la compatibilité complète de l'écosystème Node.js, incluant les modules natifs et le fichier package.json. Les développeurs peuvent désormais migrer leurs projets sans réécriture, tout en bénéficiant des fonctionnalités modernes de Deno comme le type-checking par défaut et le bundler intégré. L'outil deno run accepte désormais les projets Node.js existants, et deno add résout les dépendances depuis npm et le registre Deno simultanément. Cette unification positionne Deno comme un candidat sérieux pour les nouveaux projets full-stack TypeScript.",
            status: null,
          },
          {
            title: 'Kafka 4.0 supprime ZooKeeper définitivement',
            subtitle:
              'KRaft devient le seul mode de coordination, simplifiant le déploiement des clusters.',
            content:
              "Kafka 4.0 marque la fin définitive du support de ZooKeeper, rendant le mode KRaft obligatoire pour tous les nouveaux déploiements. Cette simplification réduit le nombre de composants à surveiller, diminue la latence de coordination et élimine les problèmes de partitionnement liés à l'élection de leader ZooKeeper. Les opérateurs constatent une réduction de 30 % de la consommation mémoire par broker et des temps de récupération après incident divisés par deux. La migration des clusters existants est guidée par un assistant intégré qui vérifie la compatibilité et planifie la bascule progressive.",
            status: null,
          },
        ],
      },
      {
        date: new Date(2025, 9, 10),
        posts: [
          {
            title: 'Svelte 5 repense les réactivité avec runes',
            subtitle:
              'Le nouveau modèle de réactivité fine réduit le code et améliore les performances.',
            content:
              "Svelte 5 introduit les runes, un ensemble de primitives de réactivité qui remplacent les stores et les réactions implicites. Les fonctions $state, $derived et $effect permettent un contrôle explicite du flux de données, réduisant les effets de bord et simplifiant le débogage. Les composants compilent désormais en JavaScript plus proche du natif, avec une réduction moyenne de 40 % de la taille du bundle. L'écosystème s'adapte rapidement avec des bibliothques tierces réécrites pour exploiter la granularité des runes, offrant des performances supérieures aux frameworks à virtual DOM pour les interfaces à forte interactivité.",
            status: null,
          },
          {
            title: 'GitHub Actions passe au runtime Node.js 24',
            subtitle:
              'Les workflows bénéficient de la dernière version LTS et de nouvelles API de parallélisation.',
            content:
              "GitHub Actions met à jour son runtime par défaut vers Node.js 24 LTS, apportant aux développeurs de actions les nouvelles API expérimentales de parallélisation et le support natif de l'import de fichiers ES. Les actions existentes restent compatibles, mais les nouvelles peuvent exploiter les workers threads pour traiter les tâches I/O en parallèle. Cette mise à jour s'accompagne d'une réduction des temps de cold start des runners, passant de 8 à 3 secondes en moyenne, ce qui est particulièrement bénéfique pour les pipelines CI/CD à haute fréquence d'exécution.",
            status: null,
          },
          {
            title: 'Redis 8 introduit le moteur vectoriel natif',
            subtitle:
              'Le stockage et la recherche vectorielle intégrés sans dépendance à un service externe.',
            content:
              "Redis 8 intègre un moteur de recherche vectorielle natif basé sur HNSW, permettant de stocker et interroger des embeddings directement dans la base sans service externe. Les développeurs d'applications RAG peuvent désormais combiner la recherche sémantique et les données transactionnelles dans une seule infrastructure, réduisant la complexité architecturale. Les performances de recherche restent compétitives avec les solutions dédiées pour les bases de moins de 100 millions de vecteurs, ce qui couvre la majorité des cas d'usage en entreprise. L'indexation est incrémentale et ne bloque pas les opérations d'écriture, garantissant une disponibilité continue.",
            status: null,
          },
        ],
      },
    ]),
  }),

  getters: {
    get_list: (state) => state.editions,
    // is_list_validated: () comment on fait pour les lots oubliés ???
  },

  actions: {
    validate(edition_index: number, post_index: number) {
      if (this.editions[edition_index]?.posts[post_index] !== undefined) {
        this.editions[edition_index].posts[post_index].status = true;
      }
    },
    reject(edition_index: number, post_index: number) {
      if (this.editions[edition_index]?.posts[post_index] !== undefined) {
        this.editions[edition_index].posts[post_index].status = false;
      }
    },
  },
});
