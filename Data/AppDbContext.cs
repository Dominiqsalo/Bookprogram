﻿using Microsoft.EntityFrameworkCore;
using BookQuotesApi.Models;

namespace BookQuotesApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Book> Books => Set<Book>();
        public DbSet<User> Users => Set<User>();
    }
}
