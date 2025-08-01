<script lang="ts">
import { fly } from "svelte/transition";
import PostCard from "@/components/card/PostCard.svelte";
import type { PostMeta } from "@/domain/post";

type PostMetaWithSlug = PostMeta & { slug: string };
type Props = {
	posts: PostMetaWithSlug[];
};

const { posts }: Props = $props();

// biome-ignore lint/style/useConst: this is a ref
let inputBox: HTMLInputElement | null = null;
let searchQuery = $state("");
let tagSearchQuery = $state("");
const selectedTags = $state<string[]>([]);
let isCompletionVisible = $state(false);

const allPostTags = posts.flatMap((post) => post.tags);
const tagCounts = allPostTags.reduce(
	(acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		return acc;
	},
	{} as Record<string, number>,
);

const filteredPosts = $derived(
	posts.filter((post) => {
		const query = searchQuery.toLowerCase();
		const matchesSearch =
			searchQuery === "" ||
			post.title.toLowerCase().includes(query) ||
			post.slug.toLowerCase().includes(query);
		const matchesTags =
			selectedTags.length === 0 ||
			selectedTags.every((tag) => post.tags.includes(tag));
		console.log({
			matchesSearch,
			matchesTags,
		});
		return matchesSearch && matchesTags;
	}),
);

const availableTags = $derived(
	tagSearchQuery
		? [...new Set(allPostTags)].filter((tag) =>
				// remove # before filtering
				tag
					.toLowerCase()
					.includes(tagSearchQuery.substring(1).toLowerCase()),
			)
		: [],
);

function handleInput(event: Event) {
	const inputValue = (event.currentTarget as HTMLInputElement).value;
	if (inputValue.startsWith("#")) {
		tagSearchQuery = inputValue;
		searchQuery = "";
		isCompletionVisible = true;
	} else {
		searchQuery = inputValue;
		tagSearchQuery = "";
		isCompletionVisible = false;
	}
}
</script>

<div class="relative">
	<input
		class="block font-serif mx-auto my-0 w-full p-3 bg-transparent border-dashed border border-[#0C3F33]/60 outline-none text-[#0C3F33] placeholder:text-[#0C3F33]/70"
		id="posts__input"
		type="text"
		placeholder="Find post... (start with # to find tags)"
		autocomplete="off"
		aria-label="search post"
		oninput={handleInput}
		bind:this={inputBox}
	/>


	{#if isCompletionVisible && tagSearchQuery}
		<div
			transition:fly={{ duration: 100, y: -50 }}
			class="absolute top-[66.2px] left-0 right-0 z-[100] text-[#0C3F33] bg-white p-2 border-dashed border border-[#0C3F33]/60"
		>
			{#if availableTags.length > 0}
				{#each availableTags as tag}
					<button
						class="block text-left text-sm w-full font-mono p-2 cursor-pointer transition-property-all ease-out duration-100 hover:bg-[#0C3F33]/10"
						onclick={() => {
							selectedTags.push(tag);
							if (inputBox) inputBox.value = "";
							tagSearchQuery = "";
							isCompletionVisible = false;
						}}
						onkeydown={() => void 0}
					>
						{tag.toUpperCase()} • {tagCounts[tag]} result{(tagCounts[tag] ?? 0) > 1 ? "s" : ""}
					</button>
				{/each}
			{:else}
				<span
					class="block text-left font-heading text-lg p-2 cursor-not-allowed transition-property-all ease-out duration-100"
				>
					No result
				</span>
			{/if}
		</div>
	{/if}
</div>
{#if selectedTags.length > 0}
	<div class="flex items-center gap-4 mt-2">
		{#each selectedTags as tag}
			<button
				class="py-2 px-4 text-sm font-mono text-[#0C3F33] border border-dashed border-[#0C3F33]/60"
				onclick={() => {
					selectedTags.splice(selectedTags.indexOf(tag), 1);
				}}
			>
				#{tag}
			</button>
		{/each}
	</div>
{/if}
<div class="grid grid-cols-12 gap-5 mt-4">
	{#if filteredPosts.length > 0}
		{#each filteredPosts as post}
			<PostCard {...post} href="/posts/{post.slug}" />
		{/each}
	{:else}
		<div class="col-span-12 text-center">
			<p class="text-sm text-[#0C3F33]/70">No posts found, try again with different tags or search query</p>
		</div>
	{/if}
</div>
