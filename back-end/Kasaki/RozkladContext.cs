using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Text.RegularExpressions;
using Kasaki.Entities;

namespace Kasaki
{
    public class RozkladContext : DbContext
    {
        public RozkladContext(): base("name=RozkladContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DepartamentEntity>()
                .HasMany(p => p.Teachers)
                .WithRequired(p => p.DepartamentEntity).HasForeignKey(s => s.DepartamentId).WillCascadeOnDelete(true);
            modelBuilder.Entity<DepartamentEntity>()
                .HasMany(p => p.Groups)
                .WithRequired(p => p.DepartamentEntity).HasForeignKey(s => s.DepartamentId).WillCascadeOnDelete(true);
            modelBuilder.Entity<GroupEntity>()
                .HasMany(p => p.Lectures)
                .WithRequired(p => p.GroupEntity).HasForeignKey(s => s.GroupId).WillCascadeOnDelete(true);
            modelBuilder.Entity<TeacherEntity>()
                .HasMany(p => p.Lectures)
                .WithRequired(p => p.TeacherEntity).HasForeignKey(s => s.TeacherId).WillCascadeOnDelete(false);
 
            modelBuilder.Entity<LectureEntity>()
                .HasRequired(x=>x.RoomEntity).WithMany().HasForeignKey(x=>x.RoomId).WillCascadeOnDelete(false);
            modelBuilder.Entity<LectureEntity>()
                .HasRequired(x => x.SubjectEntity).WithMany().HasForeignKey(x => x.SubjectId).WillCascadeOnDelete(false);
            modelBuilder.Entity<LectureEntity>()
                .HasRequired(x => x.TeacherEntity);
                //.WithMany().HasForeignKey(x => x.TeacherId).WillCascadeOnDelete(true);
            modelBuilder.Entity<LectureEntity>()
                .HasRequired(x => x.GroupEntity);
            //.WithMany().HasForeignKey(x => x.GroupId).WillCascadeOnDelete(true);
            //modelBuilder.Entity<TeacherEntity>()
            //    .HasOptional<DepartamentEntity>(s => s.DepartamentEntity)
            //    .WithMany()
            //    .WillCascadeOnDelete(true);
            //modelBuilder.Entity<TeacherEntity>()
            //    .HasRequired(a => a.DepartamentEntity)
            //    .WithMany(x => x.Teacher)
            //    .WillCascadeOnDelete(true);
            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            //modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            // modelBuilder.Conventions.Remove<OneToOneConstraintIntroductionConvention>();
            ////base.OnModelCreating(modelBuilder);
            //   modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
            //      modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }

        static RozkladContext()
        {
            Database.SetInitializer(new DataModelInitializer());
        }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<DepartamentEntity> Departaments { get; set; }
        public DbSet<GroupEntity> Groups { get; set; }
        public DbSet<LectureEntity> Lectures { get; set; }
        public DbSet<RoomEntity> Rooms { get; set; }
        public DbSet<SubjectEntity> Subjects { get; set; }
        public DbSet<TeacherEntity> Teachers { get; set; }
    }


}