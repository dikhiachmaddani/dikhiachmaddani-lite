<script lang="ts">
    type Props = {
      title: string;
      description: string;
      href: string;
      date: Date;
      tags: string[];
    };
    const { title, description, href, date, tags }: Props = $props();
  </script>
  
  <div class="col-span-4 overflow-hidden text-left">
  
    <div class="relative text-sm/6 text-[#0C3F33]">
      <span class="absolute inset-0 border border-dashed border-[#0C3F33]/60 bg-[#0C3F33]/10 group-hover:bg-[#0C3F33]/15"></span>
  
      <div class="p-3 relative z-20">
        <a
          data-astro-prefetch
          rel="prefetch"
          href={href}
          class="text-base font-bold"
        >
          {title}
        </a>
        <p class="my-2">{@html description}</p>
        <div class="flex gap-1 flex-wrap">
          {#each tags as tag}
            <span class="text-sm">
              #{tag}
            </span>
          {/each}
        </div>
      </div>
  
      <svg width="5" height="5" viewBox="0 0 5 5" class="absolute top-[-2px] left-[-2px] fill-[#0C3F33]">
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg width="5" height="5" viewBox="0 0 5 5" class="absolute top-[-2px] right-[-2px] fill-[#0C3F33]">
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg width="5" height="5" viewBox="0 0 5 5" class="absolute bottom-[-2px] left-[-2px] fill-[#0C3F33]">
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg width="5" height="5" viewBox="0 0 5 5" class="absolute bottom-[-2px] right-[-2px] fill-[#0C3F33]">
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
    </div>
  </div>
  