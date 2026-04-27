<!-- <h1>Some genre</h1>

<a href="/genres/3/update">update</a>
<a href="/genres/3/delete">delete</a>
<a href="/">go home</a> -->

<script lang="ts">
    let { data } = $props();
</script>

<!-- <a href="/<%= path %>" class="btn">Go Back</a>
<div class="main-content">
    <div class="category-info">
        <div class="category-img" style="background-image: <%= category.url %>; background-size: <%= imgStyling %>">
            <div class="category-details">
                <h1><%= category.name %></h1>
                <h3><i>
                    Contains <%= category.numberOfGames %> 
                    <% if (category.numberOfGames === 1) { %>
                        game
                    <% } else { %>
                        games
                    <% } %>
                </i></h3>
                <% if (!category.isDefault) { %>
                    <div class="option-buttons">
                        <a href="/<%= path %>/<%= category._id %>/update" class="btn">Update</a>
                        <a href="/<%= path %>/<%= category._id %>/delete" class="btn">Delete</a>
                    </div>
                <% } %>
            </div>
        </div>
    </div>
    <div class="products-list">
        <%- include('productCard', { productsArr }) %>
    </div>
</div> -->