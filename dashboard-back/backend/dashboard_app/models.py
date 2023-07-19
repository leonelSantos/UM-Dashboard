from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

# Create your models here.
#class Users(models.Model):
#    first_name = models.CharField("First Name", max_length=240)
#    last_name = models.CharField("Last Name", max_length=240)
#    email = models.EmailField()
#    access_level = models.CharField(max_length=20)

#    def __str__(self):
#        return f"{self.first_name} {self.last_name}"

class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set.")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    LEVEL_CHOICES = (
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('staff', 'Staff'),
    )
    
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    objects = UserManager()
    
    def __str__(self):
        return self.email
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def get_short_name(self):
        return self.first_name
    
class Department(models.Model):
    code = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=240)

    def __str__(self):
        return self.name    

class Grants(models.Model):
    donation_year = models.IntegerField()
    pi_name = models.CharField("PI Name", max_length=240)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    proposal = models.CharField("Proposal", max_length=240, unique=True)
    sponsor = models.CharField("Sponsor", max_length=240)
    title = models.TextField()
    project_type = models.CharField("Project Type", max_length=240)
    sponsor_type = models.CharField("Sponsor Type", max_length=240)
    status = models.CharField("Status", max_length=240)
    award_number = models.CharField("Award Number", max_length=240)
    donated_amount = models.DecimalField(max_digits= 20, decimal_places=2)
    amount_used = models.DecimalField(max_digits= 20, decimal_places=2)
    deadline = models.DateField()

class Donoations(models.Model):
    donation_year = models.IntegerField()
    donor = models.CharField("Donor", max_length=240)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    gift_agreement = models.TextField()
    donated_amount = models.DecimalField(max_digits= 20, decimal_places=2)
    amount_used = models.DecimalField(max_digits= 20, decimal_places=2)
    deadline = models.DateField()