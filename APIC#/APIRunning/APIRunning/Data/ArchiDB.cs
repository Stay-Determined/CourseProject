using System;
using APIRunning.Models;
using Microsoft.EntityFrameworkCore;


namespace APIRunning.Data
{
	public class ArchiDB : DbContext
	{
		public ArchiDB(DbContextOptions options) : base(options)
		{
			
		}

		public DbSet<User> Users { get; set; }

		public DbSet<APIRunning.Models.Course>? Course { get; set; }

		public DbSet<APIRunning.Models.Balise>? Balise { get; set; }
	}
}

