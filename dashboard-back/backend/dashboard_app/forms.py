from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User

class UserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ("email", "first_name", "last_name",)

        labels = {
            'email': 'Email',
            'first_name': 'First Name',
            'last_name': 'Last Name',
        }

        help_texts = {
            'email': 'Enter your email address.',
            'first_name': 'Enter your first name.',
            'last_name': 'Enter your last name.',
        }

class UserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ("email", "first_name", "last_name",)

        labels = {
            'email': 'Email',
            'first_name': 'First Name',
            'last_name': 'Last Name',
        }

        help_texts = {
            'email': 'Enter your email address.',
            'first_name': 'Enter your first name.',
            'last_name': 'Enter your last name.',
        }